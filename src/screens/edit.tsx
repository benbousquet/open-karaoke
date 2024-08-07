import PitchTimeline from "@/components/pitchTimeline";
import StaffCanvas from "@/components/staffCanvas";

export default function Edit() {

  return (
    <div className="overflow-auto">
      <h1 className="text-center text-3xl">Edit</h1>
      <div className="">
        <StaffCanvas />
        {/* <PitchTimeline currentTime={1000} /> */}
      </div>
    </div>
  )
}