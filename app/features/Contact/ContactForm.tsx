import { RiSendPlaneFill } from "react-icons/ri/index.js";
import Button from "~/components/Button";

const ContactForm = () => {
  return (
    <form className="bg-color-trans backdrop-blur-3xl border-2 p-10 space-y-8 border-color-blue">
      <div className="flex flex-col gap-4">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          className="bg-transparent focus:outline-none border-b border-[#B6CFFF]"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="bg-transparent focus:outline-none border-b border-[#B6CFFF]"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          className="bg-transparent focus:outline-none border-b border-[#B6CFFF]"
          type="tel"
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          className="bg-transparent focus:outline-none border-b border-[#B6CFFF]"
          cols={30}
          rows={5}
        ></textarea>
      </div>

      {/* Send button */}
      <div className="flex justify-center items-center">
        <Button>
          <RiSendPlaneFill size={20} />
          <span>Send</span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
