import { ContentTitle } from '../components/form-element'
import { FormInputText, FormInputPassword, FormInputTextArea, FormInputRadios, FormInputCheckbox, FormInputDropDown, FormInputFile, FormSubmitButton } from '../components/form-element.js'


export default function Example() {
    return (
        <div>
            <div className="form">
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

