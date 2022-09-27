import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blockawave Labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <div>Blockawave Labs</div>
          <ul className={styles.nav_ul}>
            <li className={styles.nav_li}>Product</li>
            <li className={styles.nav_li}>Team</li>
            <li className={styles.nav_li}>Careers</li>
          </ul>
          <div>KOR/ENG</div>
        </nav>
      </header>
      <main>
        <section>
          <h1>
            Let&apos;s make this wave on!
          </h1>
          <p>
            여기는 블록 웨이브 랩스의 미션 이나 목표를  한 문장으로 적는 곳입니다.
          </p>
        </section>
        <section>
          <h1>
            회사 소개 구체화
          </h1>
          <p>
          우리 회사가 어떤 일을 하는 지 더 자세한 설명이 필요합니다. 예를 들어 우리는 웹 3 빌더고, 개인 혹은 회사에 웹3 모듈을 제공하는 회사다. 이런 내용.
          </p>
          <h2>
            As a Blockchain Adaptor
          </h2>
          <p>팀은 블록체인 온보딩 툴 및 최종 사용자 최적화 프로덕트 빌더를 제공하는 소프트웨어 서비스에 초점을 맞추고 있습니다.</p>
          
        </section>
        <section>
          <h2>
            프로덕트
          </h2>
          <ul>
            <li>
              <span>멀티 월렛 대시보드</span>
              MEPE
            </li>
            <li>
              <span>노드 펀드</span>
              Quant & Validator Operating
            </li>
            <li>
              <span>앤드 포인트 유저 최적화 인프라 & 프로토콜</span>
              SSOYO
            </li>
            <li>
              More
            </li>
          </ul>
        </section>
      </main>

      <footer>
        ⓒ 2022. Blockwave Labs. all rights reserved.
      </footer>
    </div>
  )
}
