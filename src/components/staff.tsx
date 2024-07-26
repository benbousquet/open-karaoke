import { Key } from "@/utils/types";
import StaffLine from "@/components/staffLine";

const lines = [
  { id: 1, key: Key["c"] },
  { id: 2, key: Key["cs"] },
  { id: 3, key: Key["d"] },
  { id: 4, key: Key["ds"] },
  { id: 5, key: Key["e"] },
  { id: 6, key: Key["f"] },
  { id: 7, key: Key["fs"] },
  { id: 8, key: Key["g"] },
  { id: 9, key: Key["gs"] },
  { id: 10, key: Key["a"] },
  { id: 11, key: Key["as"] },
  { id: 12, key: Key["b"] },
];
export default function Staff() {
  return (
    <div className="w-[300px] min-w-[300px] border-x border-secondary">
      {lines.map((staff) => (
        <StaffLine key={staff.id} />
      ))}
    </div>
  );
}
