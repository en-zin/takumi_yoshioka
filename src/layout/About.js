import React from 'react';
import '../css/home.css';
import '../css/about.css'


const About = () => {
    return(
        <main>
            <div className="bg_about_img bg_about_img_tab bg_about_img_pc">
                <div className="bg_color">
                    <section className="content">
                        <div className="content_title_container said_border">
                            <h2 className="content_title">About</h2>            
                        </div>
                        <div className="about_container">
                            <div className="about_container">
                                <div className="about_txt_container">
                                    <h2 className="about_title">吉岡拓実について</h2>
                                    <p>初めまして吉岡拓実です。滋賀県に住んでいて現在は工場の事務仕事をしています。
                                        プライベートでは地元のスポーツチームでコーチをしています。他にも2021年8月からプログラミングスクールでの講師も始めました。
                                        性格はやりたいことができたらとことんやってしまいます。最近は時間が足りずに頭がパンクしそうになる時が多々あります。
                                        話すことが好きで友達とお話しするときは意味のない話を延々としてしまいます。
                                        コロナが流行り遊びに行ったりできないので話し足りていないです。
                                        可愛い女の子とランチに行ってお話ししたいです。
                                        よろしくお願いします。
                                    </p>
                                </div>
                            </div>
                            <div className="about_txt_container">
                                <h2 className="about_title">きっかけ</h2>
                                <p>自分がプログラムを書き始めたきっかけは後輩が専門学校でJavaを習っていて、プログラムを書けるなんてむっちゃかっこいいなと思いプログラムを書き始めました。
                                初めはJavaを学習しようと本屋さんでJavaの技術書を見てあまりの分厚さにドン引きしてJava以外のことから始めようと思い、一番身近なプログラムは何か？WEBサイトだと思いHTML CSSの学習から始めました。</p>
                            </div>
                            <div className="about_txt_container">
                                <h2 className="about_title">今後の目標</h2>
                                <p>今後の目標はIT企業に就職をして経験を積み優秀なWEBエンジニアになることです。
                                   さらにサーバーサイドエンジニアとして尖った需要のあるエンジニアになるのが目標です。
                                   現在独学ではありますが先輩エンジニアの方からレビューをいただいたり今後の方針などのアドバイスをもらいながら学習中です。
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default About;