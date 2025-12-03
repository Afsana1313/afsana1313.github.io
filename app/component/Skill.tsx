import React from "react";

interface SkillProps {
  skilltag: string;
}

const Skill: React.FC<SkillProps> = ({ skilltag }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-600">
        {skilltag}
      </div>
    </li>
  );
};

export default Skill;
