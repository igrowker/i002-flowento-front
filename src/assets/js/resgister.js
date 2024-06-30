const inputInfo = [
    {
        name: "Nombre",
        type: "text",
        required: true,
        description: ""
    },
    {
        name: "Apellido",
        type: "text",
        required: false,
        description: ""
    },
    {
        name: "Email",
        type: "email",
        required: true,
        description: ""
    },
    {
        name: "Contraseña",
        type: "password",
        required: true,
        description: "La contraseña debe tener al menos 8 caracteres, una letra en mayúscula, una en minúscula, un dígito y un carácter especial."
    },
    {
        name: "Repita la contraseña",
        type: "password",
        required: true,
        description: ""
    },
]
export default inputInfo;