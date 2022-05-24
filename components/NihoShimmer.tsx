import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: {
    originY: 0,
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

interface NihoShimmerProps {
  animate?: boolean;
}

export default function NihoShimmer({ animate }: NihoShimmerProps) {
  return (
    <motion.svg
      variants={container}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "show" : undefined}
      width="720"
      height="1920"
      viewBox="0 0 720 1920"
      preserveAspectRatio="xMaxYMin"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%" }}
    >
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M160 1840H320L240 1920L160 1840Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M80 1760H240L160 1840L80 1760Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M160 1680H320L240 1760L160 1680Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M400 1680H560L480 1760L400 1680Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.0625"
          d="M240 1600H400L320 1680L240 1600Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M80 1600H240L160 1680L80 1600Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M0 1520H160L80 1600L0 1520Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M320 1520H480L400 1600L320 1520Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M160 1520H320L240 1600L160 1520Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M80 1440H240L160 1520L80 1440Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M400 1440H560L480 1520L400 1440Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M160 1360H320L240 1440L160 1360Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M320 1360H480L400 1440L320 1360Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M240 1280H400L320 1360L240 1280Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M80 1280H240L160 1360L80 1280Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M400 1280H560L480 1360L400 1280Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M160 1200H320L240 1280L160 1200Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M320 1200H480L400 1280L320 1200Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M240 1120H400L320 1200L240 1120Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M400 1120H560L480 1200L400 1120Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M160 1040H320L240 1120L160 1040Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M320 1040H480L400 1120L320 1040Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M240 960H400L320 1040L240 960Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M80 960H240L160 1040L80 960Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M400 960H560L480 1040L400 960Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M320 880H480L400 960L320 880Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.0625"
          d="M160 880H320L240 960L160 880Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M0 880H160L80 960L0 880Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.0625"
          d="M240 800H400L320 880L240 800Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M160 720H320L240 800L160 720Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M320 720H480L400 800L320 720Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.1"
          d="M320 560H480L400 640L320 560Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M0 560H160L80 640L0 560Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M480 560H640L560 640L480 560Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.1"
          d="M160 480H320L240 560L160 480Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M560 480H720L640 560L560 480Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M0 400H160L80 480L0 400Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M400 320H560L480 400L400 320Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.1"
          d="M160 320H320L240 400L160 320Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M320 240H480L400 320L320 240Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.125"
          d="M240 160H400L320 240L240 160Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.25"
          d="M160 80H320L240 160L160 80Z"
          fill="#9F8986"
        />
      </motion.g>
      <motion.g variants={item}>
        <motion.path
          opacity="0.5"
          d="M320 0H480L400 80L320 0Z"
          fill="#9F8986"
        />
      </motion.g>
    </motion.svg>
  );
}
