function ContentTitle(props) {
    return (
        <div className="content-title">
            <h4>{props.value}</h4>
        </div>
    )
}

function FormInputText(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <input type="text" id={props.name} placeholder={props.placeholder} />
        </div>
    )
}

function FormInputPassword(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <input type="password" id={props.name} placeholder={props.placeholder} />
        </div>
    )
}


function FormInputTextArea(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <textarea id={props.name} rows={10} placeholder={props.placeholder} />
        </div>
    )
}

function FormInputRadios(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <div className="form-radios">
                {props.values.map((value, index) => (
                    <div key={index}>
                        <input type="radio" id={value} name={props.name} value={value} />
                        <label htmlFor={value} className="form-element__select-label">{value}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

function FormInputCheckbox(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <div className="form-checkboxes">
                {props.values.map((value, index) => (
                    <div key={index}>
                        <input type="checkbox" id={value} name={props.name} value={value} />
                        <label htmlFor={value} className="form-element__select-label">{value}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

function FormInputDropDown(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <select id={props.name}>
                {props.values.map((value, index) => (
                    <option key={index} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}

function FormInputFile(props) {
    return (
        <div className="form-element">
            <label htmlFor={props.name} className="form-element__label">{props.name}</label>
            <input type="file" id={props.name} />
        </div>
    )
}

function FormSubmitButton(props) {
    return (
        <div className="form-submit">
            <button type="submit">{props.name}</button>
        </div>
    )
}

export {
    ContentTitle,
    FormInputText,
    FormInputPassword,
    FormInputTextArea,
    FormInputRadios,
    FormInputCheckbox,
    FormInputDropDown,
    FormInputFile,
    FormSubmitButton
}