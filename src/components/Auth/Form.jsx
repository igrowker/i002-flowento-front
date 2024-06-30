const inputsText = ["Nombre", "Apellido", "Email"];

export const Form = () => {
    return (
        <form className=" mt-36 font-lato flex flex-col">
            {inputsText.map((value, index) => <div key={index} className="my-2.5 flex justify-center items-center flex-col">
                <label htmlFor={value.toLowerCase()} className="w-full mb-2.5 leading-3 font-normal text-gray300">{value} <span className="text-redprimary">*</span></label>
                <input type="text" className="w-full px-3 h-8 border-solid rounded border-2 border-orangeprimary" id={value.toLowerCase()} name={value.toLowerCase()} placeholder={value} />
            </div>)}
            {/* <div className="my-2.5 flex justify-center items-center flex-col">
                <label htmlFor="nombre" className="w-full mb-2.5 leading-3 font-normal text-gray300">Nombre <span className="text-redprimary">*</span></label>
                <input type="text" className="w-full px-3 h-8 border-solid rounded border-2 border-orangeprimary" id="nombre" name="nombre" placeholder="Nombre" />
            </div>
            <div className="my-2.5 flex justify-center items-center flex-col">
                <label htmlFor="apellido" className="w-full mb-2.5 leading-3 font-normal text-gray300">Apellido <span className="text-redprimary">*</span></label>
                <input type="text" className="w-full px-3 h-8 border-solid rounded border-2 border-orangeprimary" id="apellido" name="apellido" placeholder="Apellido" />
            </div>
            <div className="my-2.5 flex justify-center items-center flex-col">
                <label htmlFor="email" className="w-full mb-2.5 leading-3 font-normal text-gray300">Email <span className="text-redprimary">*</span></label>
                <input type="text" className="w-full px-3 h-8 border-solid rounded border-2 border-orangeprimary" id="email" name="email" placeholder="example@gmeil.com" />
            </div> */}
        </form>
    )
}
