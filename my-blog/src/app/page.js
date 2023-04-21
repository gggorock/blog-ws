import Link from 'next/link'

export default function Home() {
  let name = '사울'
  let link = 'http://google.com'

  return (

    <div>
      <h4 className="title" style={{ color: 'red', fontSize: '30px' }}>직접 만든 블로그 페이지</h4>
      <p className="description"> 나 {name}은 처음으로 글을 작성해본다
        하하하하하 호호호호호
        깔깔깔깔깔</p>
      <a href={link}>링크</a>
      <p className="create-at">2023년 4월 21일 금요일 17:57</p>
    </div>
  )
}
