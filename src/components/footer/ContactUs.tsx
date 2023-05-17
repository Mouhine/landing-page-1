const ContactUs = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-right font-bold my-4 ">Contact Us</h2>
      <ul className="space-y-3">
        <li className="flex flex-col items-end text-[12px] ">
          <span className="font-bold text-[#274C5B]">Email</span>
          <p className="text-[#D4D4D4]">needemailinfo@gmail.com</p>
        </li>
        <li className="flex flex-col items-end text-[12px]">
          <span className="font-bold text-[#274C5B]">Phon</span>
          <p className="text-[#D4D4D4]">6655442233</p>
        </li>
        <li className="flex flex-col items-end text-[12px]">
          <span className="font-bold text-[#274C5B]">Address</span>
          <p className="text-[#D4D4D4]">88 road, broklyn street, USA</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
