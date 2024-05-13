import {Group, FormInput, FormInputLabel} from './input-field.styles';

const InputField = ({label, inputOptions}) => {
    return (
        <Group>
            <FormInput {...inputOptions}/>
            <FormInputLabel shrink={inputOptions.value.length}>{label}</FormInputLabel>
        </Group>
    )
}

export default InputField;