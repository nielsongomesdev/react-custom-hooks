import { useFormInput } from "../../hooks/useForm";

export default function Form() {
    const firstNameInput = useFormInput('Nielson')
    const lastNameInput = useFormInput('Gomes')


    return (
        <>
            <label>
                First Name:
                <input {...firstNameInput} />
            </label>

            <label>
                Last Name:
                <input {...lastNameInput} />
            </label>

            <p>
                <b>
                    Bom dia, {firstNameInput.value} {lastNameInput.value}!
                </b>
            </p>
        </>
    );
}
