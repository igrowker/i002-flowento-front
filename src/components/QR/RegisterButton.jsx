const RegisterButton = ({ onClick }) => {
  return (
    <div className="flex items-center mt-2">
      <button
        onClick={onClick}
        className="flex w-lg rounded-3xl justify-center bg-orangeprimary px-3 py-1.5 text-xs md:text-base font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2 border-white transition-transform duration-300 lg:hover:scale-105"
        style={{ boxShadow: "0px 4px 10px 0px #00000040" }}
      >
        Inscribirse
      </button>
    </div>
  );
};

export default RegisterButton;
