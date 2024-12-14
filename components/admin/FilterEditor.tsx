import { FirebaseTablesEnum, StatusEnum } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { Filter } from "@/lib/firebase-helpers/interfaces";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

interface FilterEditorProps {
  labels: { singular: string; plural: string };
  filterTable: FirebaseTablesEnum;
  memberId: string;
  filters: { name: string; id: string; status: string }[];
  setFilters: (filter: { name: string; id: string; status: string }[]) => void;
  suggestedFilter: string;
  setSuggestedFilter: (suggestedFilter: string) => void;
}

export default function FilterEditor({
  labels,
  filterTable,
  memberId,
  filters,
  setFilters,
  suggestedFilter,
  setSuggestedFilter,
}: FilterEditorProps) {
  const [open, setOpen] = useState(false);
  const [allFilters, setAllFilters] = useState<Filter[]>([]);
  const [filterAlreadySuggested, setFilterAlreadySuggested] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(
    filters ? filters.map((f) => f?.id) : [],
  );
  const [suggestOpen, setSuggestOpen] = useState(false);
  const unnapprovedFilters = filters
    ? filters.filter((f) => f.status !== StatusEnum.APPROVED).map((f) => f.name)
    : [];

  const filterClass = `
    inline-block
    rounded-xl
    border
    px-3
    py-0.5
    my-0.5
    text-sm
    tracking-wide
    text-secondary-foreground
    `;

  const handleOpen = async () => {
    setOpen(!open);
    if (unnapprovedFilters.length > 0) {
      setSuggestedFilter(unnapprovedFilters[0]);
      setSuggestOpen(true);
    } else if (suggestedFilter === "" || suggestedFilter === null) {
      setSuggestOpen(false);
    }
    await fetch(`/api/filters?filterTable=${filterTable}`)
      .then((response) => response.json())
      .then((data) => {
        const filters = data.filters;
        setAllFilters(filters);
      });
  };

  const handleSelect = (filter: Filter) => {
    if (selectedFilters.includes(filter.id)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter.id));
      setFilters(filters ? filters.filter((f) => f.id !== filter.id) : []);
    } else {
      if (selectedFilters.length === 3) {
        alert(`You can only select up to 3 ${labels.plural}.`);
        return;
      }
      setSelectedFilters([...selectedFilters, filter.id]);
      const selected = {
        name: filter.name,
        id: filter.id,
        status: StatusEnum.APPROVED,
      };
      setFilters(filters ? [...filters, selected] : [selected]);
    }
  };

  return (
    <div className="col-span-2">
      <h4 className="text-sm font-semibold">{labels.plural}</h4>
      <div className="flex">
        <div className="flex grow flex-wrap items-start gap-1">
          {filters &&
            filters.map((filter, i) => {
              const filterNotApproved = filter.status !== StatusEnum.APPROVED;
              if (
                !suggestedFilter &&
                filterNotApproved &&
                !filterAlreadySuggested
              ) {
                setFilterAlreadySuggested(true);
              }
              return (
                <div className={filterClass} key={`${filter.id}-${i}`}>
                  <span
                    className={cn(
                      filterNotApproved &&
                        `bg-violet-600/20 font-medium text-violet-600`,
                    )}
                    key={memberId + filter.id}
                  >
                    {filter.name}
                    {filterNotApproved ? ` (${filter.status})` : null}
                  </span>
                </div>
              );
            })}
          {suggestedFilter && !unnapprovedFilters.includes(suggestedFilter) && (
            <div className={filterClass}>
              <span
                className={cn(`
                  bg-violet-600/20 
                  font-medium 
                  text-violet-600
                `)}
                key={suggestedFilter}
              >
                {suggestedFilter} (pending approval)
              </span>
            </div>
          )}
        </div>
        <Button
          className="shrink-0 p-2"
          variant="outline"
          size="icon"
          onClick={handleOpen}
        >
          <Pencil />
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder={"Search " + labels.plural} />
          <CommandEmpty>No {labels.singular} found.</CommandEmpty>
          <CommandList>
            <CommandGroup className="overflow-auto">
              {allFilters.map((filter) => (
                <CommandItem
                  key={filter.id}
                  value={filter.name}
                  onSelect={() => handleSelect(filter)}
                >
                  {filter.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedFilters.includes(filter.id)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>

          <div className="border-t p-2">
            {!suggestOpen ? (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSuggestOpen(true)}
                >
                  Suggest a new {labels.singular}
                </Button>
              </>
            ) : (
              <>
                <h4 className="text-sm">Please suggest with care 🤙🏽</h4>
                <p className="pb-2 text-xs">
                  Suggesting a new label increases the time it takes to approve
                  your entry, as we manually review all submissions. Please
                  consider any existing labels that might fit your situation.
                </p>
                <Input
                  name={"suggestion"}
                  placeholder={"New " + labels.singular}
                  className={suggestedFilter ? "bg-brown-600/20" : "bg-white"}
                  value={suggestedFilter}
                  disabled={filterAlreadySuggested}
                  onChange={(e) => {
                    setSuggestedFilter(e.target.value);
                  }}
                />
              </>
            )}
          </div>
        </CommandDialog>
      </div>
    </div>
  );
}
