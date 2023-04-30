export default function Home() {
  return (
    <div>
      <div className="form-content">
        <ContentTitle value="게시물 작성" />
        <FormInputText name="제목" placeholder="제목을 입력해주세요." />
        <FormInputPassword name="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <FormInputTextArea name="내용" placeholder="내용을 입력해주세요." />
        <FormInputRadios name="성별" values={["남성", "여성", "중성"]} />
        <FormInputCheckbox name="관심사" values={["백엔드", "프론트", "어플리케이션", "디자인"]} />
        <FormInputDropDown name="카테고리" values={["자유", "Q&A", "토론"]} />
        <FormInputFile name="파일첨부" />
        <FormSubmitButton name="제출하기" redirectionPath='/success' />
      </div>
    </div>
  )
}

function ContentTitle(props) {
  return (
    <div className="my-form">
      <h4>{props.value}</h4>
    </div>
  )
}

function FormInputText(props) {
  return (
    <div className="form-element">
      <label htmlFor={props.name}>{props.name}</label>
      <input type="text" id={props.name} placeholder={props.placeholder} />
    </div>
  )
}

function FormInputPassword(props) {
  return (
    <div className="form-element">
      <label htmlFor={props.name}>{props.name}</label>
      <input type="password" id={props.name} placeholder={props.placeholder} />
    </div>
  )
}


function FormInputTextArea(props) {
  return (
    <div className="form-element">
      <label htmlFor={props.name}>{props.name}</label>
      <textarea id={props.name} rows={10} placeholder={props.placeholder} />
    </div>
  )
}

function FormInputRadios(props) {
  return (
    <div className="form-element">
      <label htmlFor={props.name}>{props.name}</label>
      <div className="form-radios">
        {props.values.map((value, index) => (
          <div key={index}>
            <input type="radio" id={value} name={props.name} value={value} />
            <label htmlFor={value}>{value}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormInputCheckbox(props) {
  return (
    <div className="form-element">
      <label htmlFor={props.name}>{props.name}</label>
      <div className="form-checkboxes">
        {props.values.map((value, index) => (
          <div key={index}>
            <input type="checkbox" id={value} name={props.name} value={value} />
            <label htmlFor={value}>{value}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormInputDropDown(props) {
  return (
    <div className="form-element">
      <label htmlFor={props.name}>{props.name}</label>
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
      <label htmlFor={props.name}>{props.name}</label>
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