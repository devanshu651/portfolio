export default function CampusEyeAI() {
  return (
    <main className="min-h-screen bg-black px-6">
      <div className="mx-auto max-w-3xl py-24">
        <h1 className="text-3xl font-semibold text-white">
          CampusEye AI
        </h1>

        <p className="mt-4 text-lg text-zinc-400">
          A smart Face-ID–based attendance system built as a solo project to automate
          manual attendance using real-time face recognition.
        </p>

        <p className="mt-6 text-zinc-400">
          The system captures live video from a webcam, detects and recognizes registered
          faces, and logs attendance with timestamps while preventing duplicate entries
          within a defined time window.
        </p>

        <p className="mt-6 text-zinc-400">
          I designed and implemented the complete pipeline — from face encoding and
          database design to real-time recognition logic and UI integration — with a
          focus on reliability and real-world usability.
        </p>

        <p className="mt-6 text-sm text-zinc-500">
          Tech stack: Python, OpenCV, face_recognition (dlib), SQLite, Streamlit · Runs locally
        </p>
      </div>
    </main>
  );
}
