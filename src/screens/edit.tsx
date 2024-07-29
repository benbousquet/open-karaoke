import PitchTimeline from "@/components/pitchTimeline";

export default function Edit() {

  return (
    <div className="overflow-auto">
      <h1 className="text-center text-3xl">Edit</h1>
      <div className="">
        <PitchTimeline currentTime={1000} />
      </div>
    </div>
  )
}