'use client'

// import { ContentTitle, FormInputText, FormInputTextArea, FormSubmitButton } from '../../components/form-element.js'
import { useState } from 'react'

export default function Post() {

    const [createPostCommand, setCreatePostCommand] = useState({ title: '', content: '' })

    const handleInputValueChange = (event) => {
        setCreatePostCommand(
            {
                ...createPostCommand,
                [event.target.name]: event.target.value
            }
        )
    }

    const handleSubmit = () => {
        console.log('createPostCommand', createPostCommand)
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createPostCommand)
        })
            .then(response => response.json())
            .then(data => {
                console.log('postId:', data)
                window.location.href = '/posts'
            })
            .catch((error) => {
                console.error('Error:', error)
            }
            )
    }

    return (
        <div>
            <div className="form">
                <ContentTitle value="게시물 작성" />
                <FormInputText name="제목" placeholder="제목을 입력해주세요." field="title" onChange={handleInputValueChange} />
                <FormInputTextArea name="내용" placeholder="내용을 입력해주세요." field="content" onChange={handleInputValueChange} />
                <FormSubmitButton name="제출하기" handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

function ContentTitle(props) {
    return (
        <div className="content-title">
            {props.value}
        </div>
    )
}

function FormInputText(props) {
    return (
        <div className="form-input-text">
            <div className="form-input-text-name">
                {props.name}
            </div>
            <div className="form-input-text-input">
                <input type="text" name={props.field} placeholder={props.placeholder} onChange={props.onChange} />
            </div>
        </div>
    )
}

function FormInputTextArea(props) {
    return (
        <div className="form-input-textarea">
            <div className="form-input-textarea-name">
                {props.name}
            </div>
            <div className="form-input-textarea-input">
                <textarea name={props.field} placeholder={props.placeholder} onChange={props.onChange} />
            </div>
        </div>
    )
}

function FormSubmitButton(props) {
    return (
        <div className="form-submit-button">
            <button type="submit" onClick={props.handleSubmit}>
                {props.name}
            </button>
        </div>
    )
}

class CreatePostCommand {
    constructor(title, content) {
        this.title = title
        this.content = content
    }

    validate() {
        if (this.title == null) {
            throw new Error('제목을 입력해주세요.')
        }
        if (this.content == null) {
            throw new Error('내용을 입력해주세요.')
        }
    }

}
