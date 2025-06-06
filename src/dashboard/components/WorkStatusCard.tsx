import { useSelector, useDispatch } from "react-redux";
import { Dispatch, RootState } from "../../shared/store";
import { updateWorkStatus } from "../../shared/store/userSlice.ts";
import { statusLabels, WorkStatus } from "../../shared/types";

type WorkStatusCardProps = {
  className?: string;
};

type colourStyleType = {
  selected: string;
  hover: string;
};

const colourStyle: Record<WorkStatus, colourStyleType> = {
  looking: {
    selected: "border-green-600 bg-green-50 text-green-800",
    hover: "hover:border-green-400 hover:bg-green-50"
  },
  passive: {
    selected: "border-yellow-500 bg-yellow-50 text-yellow-800",
    hover: "hover:border-yellow-400 hover:bg-yellow-50"
  },
  not_looking: {
    selected: "border-red-600 bg-red-50 text-red-800",
    hover: "hover:border-red-400 hover:bg-red-50"
  }
};

export const WorkStatusCard = ({ className = "" }: WorkStatusCardProps) => {
  const { profile } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<Dispatch>();

  const handleStatusChange = (status: WorkStatus) => {
    dispatch(updateWorkStatus(status));
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 h-full ${className}`}>
      <h3 className="text-lg font-medium mb-4 pb-3 border-b border-gray-200">
        Your Work Status
      </h3>

      <div className="py-2 text-gray-700">
        <p className="mb-4">Update your availability for new opportunities:</p>

        <fieldset className="space-y-3">
          {(Object.entries(statusLabels) as [WorkStatus, string][]).map(
            ([value, label]) => {
              const selected = profile.workStatus === value;
              const selectedStyles = selected
                ? colourStyle[value].selected
                : `border-gray-300 text-gray-700 ${colourStyle[value].hover}`;

              return (
                <label
                  key={value}
                  className={`block rounded-md border p-4 cursor-pointer transition text-sm font-medium ${selectedStyles}`}
                >
                  <input
                    type="radio"
                    name="workStatus"
                    value={value}
                    checked={selected}
                    onChange={() => handleStatusChange(value)}
                    className="sr-only"
                  />
                  {label}
                </label>
              );
            }
          )}
        </fieldset>
      </div>
    </div>
  );
};
