import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../shared/store";
import { updateWorkStatus } from "../../shared/store/userSlice.ts";
import { statusLabels, WorkStatus } from "../../shared/types";
import { useState } from "react";

const statusColours: Record<WorkStatus, string> = {
  looking: "🟢",
  passive: "🟡",
  not_looking: "🔴"
};

export const UserAvatar = () => {
  const { profile } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch>();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleStatusChange = (status: WorkStatus) => {
    dispatch(updateWorkStatus(status));
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-medium text-sm">{profile.name}</span>
          <span className="text-xs text-gray-600">
            {statusColours[profile.workStatus]}{" "}
            {statusLabels[profile.workStatus]}
          </span>
        </div>
      </div>

      {dropdownOpen && (
        <ul className="absolute bottom-full mb-4 left-0 bg-white shadow-lg rounded border w-auto">
          <h4 className="text-sm font-bold px-3 py-2 text-gray-700 mb-2">
            Update your work status:
          </h4>
          <li
            onClick={() => handleStatusChange("looking")}
            className="text-sm px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Currently looking for work
          </li>
          <li
            onClick={() => handleStatusChange("passive")}
            className="text-sm px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Passively looking for work
          </li>
          <li
            onClick={() => handleStatusChange("not_looking")}
            className="text-sm px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            Don't want to hear about work
          </li>
        </ul>
      )}
    </div>
  );
};
