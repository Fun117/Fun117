import Contacts from "@/components/pages/contacts";
import Test from "@/components/pages/test";

export default function CPage() {
  return (
    <div className="relative flex flex-row flex-wrap justify-center items-center min-h-[calc(100vh-64px)] p-2 md:p-6 lg:p-24 xl:p-32">
      <Contacts />
    </div>
  );
}
