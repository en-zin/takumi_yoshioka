import React from 'react';
import '../css/home.css';
import '../css/profile.css'
const Profile = () => {
    return (
        <main>
            <div className="bg_profile_img bg_profile_img_tab bg_profile_img_pc">
                <div className="bg_color">
                </div>
                    <section className="content">
                        <div className="content_title_container">
                            <h2 className="content_title top_border">Who are you</h2>
                        </div>
                        <div className="profile_container">
                            <div className="profile_txt_container">
                                <h2 className="profile_title">名前</h2>
                                <p>吉岡拓実</p>
                            </div>
                            <div className="profile_txt_container">
                                <h2 className="profile_title">生年月日</h2>
                                <p>1999年07月21</p>
                            </div>
                            <div className="profile_txt_container">
                                <h2 className="profile_title">趣味</h2>
                                <p>筋トレ アニメ プログラミング</p>
                            </div>
                            <div className="profile_txt_container">
                                <h2 className="profile_title">好きな言葉</h2>
                                <p>Bestが無理ならBetterを探せ</p>
                            </div>
                            <div className="profile_txt_container">
                                <h2 className="profile_title">メッセージ</h2>
                                <p>黒い画面にコードを書いているのがカッコ良いと思いプログラミングを学習し始めた僕ですが、今もその気持ちは変わらずカッコ良いを常に追い求めています。熱意と行動力、それを実現するのが僕の強みです。こんな僕とお話してみたいと思う方がいればぜひformの方から連絡を入れください。よろしくお願いします。また、現在IT企業への転職も考えて行動しています。自分を雇ってもらえる会社があるならスカウトをお待ちしております。
                                </p>
                            </div>
                        </div>
                    </section>
            </div>
        </main>
    )
}

export default Profile;