import { Component, Prop, Vue } from 'vue-property-decorator'

import YoutubeCard from '@/components/Molecules/YoutubeCard'

@Component({
    components: {
        YoutubeCard,
    }
})
export default class YoutubeCardList extends Vue {
    public datas = [
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/cO6RmJ07dy9mtB33CKztrHfFjvI"',
         id: {
          kind: 'youtube#video',
          videoId: 'gyuOY5v9LcQ'
         },
         snippet: {
          publishedAt: '2018-08-31T07:40:38.000Z',
          channelId: 'UC6MlluylILbTelNRAvofO1w',
          title: '【第五人格】新キャラ! カウボーイ!『投げ縄 救出でキャンパー終了説!』【IdentityV:実況者ジャンヌ】',
          description: '今回の調香師を見送りで、カウボーイ狙っても全然あり!\n役回りがしっかりしてるので、飽き気味のプレイヤーも楽しいかも( ^)o(^ )\n\n【Twitter】応援コメント,リクエスト,質問は全てこちらまで!!↓\n【@bulletjda】 https://twitter.com/bulletjda\n【Instagram】\nhttps://www.instagram.com/jda0106/\n\nAtSAクランの新規メンバー募集しております!!\nhttps://ssl.form-mailer.jp/fms/48076d4f558683\n\n【CoD WW2の再生リストはこちら↓】\nhttps://www.youtube.com/playlist?list=PLoVj4uT0mwx0vpDIOrIYbX0ERJhq5Xeny&disable_polymer=true\n\nJDAが使ってるコントローラーはこちら!↓RED WINGS様URL\nhttp://scuf-redwings.jimdo.com/\n【CURBX】http://amzn.asia/iEbMrVr\n【RAISX】http://amzn.asia/6MynQ0G\n\nしまリス堂 様 naconやXim4と言った様々なデバイスが安く購入出来ます!!\nhttps://www.shimarisudou.com/\n\n情報提供はEAA様公認で頂いてます。EAA様 URL↓\nhttp://fpsjp.net/\nhttps://www.youtube.com/channel/UCLIpsTraUMqES8FRDIWNc_A\n\nジャンヌのOP名が気になる方はこちらから!↓\nhttps://www.youtube.com/watch?v=3ezTdaKzlxg&t=145s\n\nBGM、SEをお借りしてるサイト↓魔王魂様 ※ニコ二コモンズ,NCSも使用中\nhttp://maoudamashii.jokersounds.com/\nhttps://www.youtube.com/user/NoCopyrightSounds',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/gyuOY5v9LcQ/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/gyuOY5v9LcQ/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/gyuOY5v9LcQ/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: '実況者ジャンヌ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/5O5AxLaGL7uMfhE1OJTfYrdZ-6Q"',
         id: {
          kind: 'youtube#video',
          videoId: 'NEey1T63TGY'
         },
         snippet: {
          publishedAt: '2018-08-17T10:32:17.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】これだからサバイバーはやめられない【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【冒険家】',
          description: 'あちいー！！！！！！！\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n\n【第五人格】これだからサバイバーはやめられない【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【冒険家】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/NEey1T63TGY/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/NEey1T63TGY/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/NEey1T63TGY/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/WzflikXTevo9IliiIqGgyyagDmM"',
         id: {
          kind: 'youtube#video',
          videoId: 'qK2NT8BS8X4'
         },
         snippet: {
          publishedAt: '2018-08-30T05:46:47.000Z',
          channelId: 'UCj6_0tBpVpmyYSGu6f-uKqw',
          title: '【荒野行動】デュオで出会ったガチオタと直接会ってみたwwwww',
          description: 'あ、初めまして\nあ、はじめまして\nじゃ、じゃあ荒野行動やりますか\nお、お願いします。。。\n\nスカイピース\nhttps://www.youtube.com/channel/UC8_wmm5DX9mb4jrLiw8ZYzw\n\nチャンネル登録お願いします\nhttps://www.youtube.com/channel/UCj6_0tBpVpmyYSGu6f-uKqw\n\n【オススメ動画】\n見た人にしかわからない前前前世\nhttps://www.youtube.com/watch?v=RtRcWhCbtN0\n\n前前前世\nhttps://www.youtube.com/watch?v=pMLcom-jy3U\n\n【twitter】\nhttps://twitter.com/teokun711\n\n【twitterサブ】\nhttps://twitter.com/teokun7117\n\n【instagram】\nhttps://www.instagram.com/teokun.711/\n\nふと考えた面白そうなことなどを\n動画にしていきたいと思いまする\nたくさんの人が見てくれると幸せです♪\n\n１０万RT動画\nhttps://twitter.com/teokun711/status/701361034649468932\n\n動画代表作\nhttps://twitter.com/teokun711/status/573867358567145472',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/qK2NT8BS8X4/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/qK2NT8BS8X4/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/qK2NT8BS8X4/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'テオくんホーム',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/L8hLCTixwIzvDShgltKK6YjlHK8"',
         id: {
          kind: 'youtube#video',
          videoId: 'X5pU50G9mXo'
         },
         snippet: {
          publishedAt: '2018-08-19T12:11:01.000Z',
          channelId: 'UCx2khlRV-Pui_seNEnS9m0w',
          title: '【第五人格】一発でわかる上手い人と下手な人の板の使い方【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          description: 'お昼ご飯を食べてたら、どこからか迷い込んできたベルゼブブ （ハエ）が降臨した。私はどうにか駆除しようとエクスカリバー（ハエ叩き）を手に取ることに成功した。標的が止まったことを確認し、わが手に握られし聖剣（ハエ叩き）をベルゼブブ （ハエ）に振り下ろす。しかしその力があまりに強大であり、パンドラの箱（ゴミ箱）がドンガラガッシャーンっと音を立てて崩壊した。先の聖剣を壁に掛け、私は異なる聖剣（ホウキ）を手に取り新たな任務に赴くのであった…（多分ハエは逃げた）\n\n板の倒すタイミングで\n\n他の人の第五人格【identityⅤ】おすすめ動画\nhttps://www.youtube.com/watch?v=H2-Ywpj94GM\n\nhttps://www.youtube.com/watch?v=gEsbunzqbM0\n\nhttps://www.youtube.com/watch?v=u7F1BjwOS9M\n\nhttps://www.youtube.com/watch?v=yKrWYZOMEAE&t=551s\n\nhttps://www.youtube.com/watch?v=NEey1T63TGY\n\nhttps://www.youtube.com/watch?v=tT4R9fmydTY&t=2s\n\nhttps://www.youtube.com/watch?v=KfpmMGqPxBs\n\nhttps://www.youtube.com/watch?v=UkelTsz78ak\n\nhttps://www.youtube.com/watch?v=c_NWFQ5AAxw\n\nhttps://www.youtube.com/watch?v=MwlcD_1OR2w\n\nhttps://www.youtube.com/watch?v=sIt83G_Mqas\n\nhttps://www.youtube.com/watch?v=s2d9FrAHKCM&t=578s\n\nhttps://www.youtube.com/watch?v=IoMsGDmaHoA\n\nhttps://www.youtube.com/watch?v=t0__utKgR80',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/X5pU50G9mXo/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/X5pU50G9mXo/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/X5pU50G9mXo/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'gamesバド',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/LDBpBF0HLjJ0JnC8UnG_YvpZaLI"',
         id: {
          kind: 'youtube#video',
          videoId: 'WJP45cKXEHQ'
         },
         snippet: {
          publishedAt: '2018-08-31T08:21:17.000Z',
          channelId: 'UCzqoAFObkB3Ptp92Jqg7CWQ',
          title: '【第５人格-アイデンティティＶ-】ダブルハンターモード『黄衣の王(タコ)＆リッパーコンビ！』最強の２人が手を組んだ！【攻略実況：43】| スマホ版 DBD Identity V',
          description: '前の動画：黒白無常(宿傘の魂)解禁！スキル判明\nhttps://www.youtube.com/watch?v=cyA2OK5sDKw\n\nアイデンティティＶ 攻略実況リスト\nhttps://www.youtube.com/watch?v=3np3AkqlZ2Q&list=PLfnCnzOsKubUhnMJ7faCuUU7Sh1_hthiM&t=0s&index=2\n\nあいもです。最強のおにぃになる(・ス・)و \n\n最強のやつらが手を組んだ！ダブルハンターめちゃくそ\nおもしろいです。でもハンター多すぎてマッチングしない\n問題が発生してるｗ　そのくらいサバイバーの難易度が\n高いんだねﾀﾌﾞﾝ。サバイバー側も今度やってみよう！\n\n\nこの動画のゲーム：第５人格 -アイデンティティＶ-\nIdentity V　Dead by Daylight(DBD)\n\n\nブログ http://imonomono.blog.fc2.com/\nツイッター https://twitter.com/imonomonomo',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/WJP45cKXEHQ/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/WJP45cKXEHQ/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/WJP45cKXEHQ/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'あいも',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/4UzEoCwANa0o0FNhQ8p1i6BKW7M"',
         id: {
          kind: 'youtube#video',
          videoId: 'zOq_7VoXt_o'
         },
         snippet: {
          publishedAt: '2018-08-31T05:41:00.000Z',
          channelId: 'UC-0-GJ_ThO567EMoINxORow',
          title: '【第五人格】チェイスするなら泥棒しかないっしょ！？【Identity V】ゆっくり実況',
          description: '前回　https://youtu.be/TKbwI7L6SNg\n\ncostarのコミュニティで視聴者さん参加でプレイしていくつもりです\n\nりうここだけコミュ　は　こちら\nhttps://co-star.me/influencers/ryu\n\nTwitter　は　こちら　\nhttps://twitter.com/boss_riko',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/zOq_7VoXt_o/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/zOq_7VoXt_o/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/zOq_7VoXt_o/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'りう',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/qbombqly84PjrxxoZWzeRUqYNx4"',
         id: {
          kind: 'youtube#video',
          videoId: 'ZQrfVXFM0x0'
         },
         snippet: {
          publishedAt: '2018-08-28T01:08:44.000Z',
          channelId: 'UC3LBFXbWtEBdOOUb8-qJm9Q',
          title: '第五人格！挑戰遛鬼超過三分鐘 女友竟跑去“開”這個！？【眾量級CROWD｜Games手遊特輯】',
          description: 'Andy老師：「家寧一開那個 我笑翻😂」 / 家寧+0：「好刺激啊～一邊玩心臟也跟著跳動😨」\n\n👉🏻立即體驗刺激感：http://t.cn/Re0gYvV\n\n訂閱-追蹤-按讚更多頻道\n►訂閱YouTube【眾量級CRWOD x FUN生活-第二頻道】\nhttps://is.gd/4dSkyk \n►訂閱YouTube【家寧+0】\nhttps://is.gd/lcdma4 \n►訂閱YouTube【Andy老師】 \nhttps://is.gd/laVony\n------------------------------------------------------------------------------------\n►FB【眾量級CROWD】\nhttps://www.facebook.com/etman0909/\n►FB【家寧+0】\nhttp://bit.ly/29PljQA\n►FB【Andy老師】\nhttp://bit.ly/29JkGYS\n------------------------------------------------------------------------------------\n►IG【眾量級CRWOD】\nhttps://www.instagram.com/etman0309/\n------------------------------------------------------------------------------------\n►美拍【众量级CROWD】\nhttp://www.meipai.com/user/1048418678\n------------------------------------------------------------------------------------\n►微博【众量级CROWD】\nhttp://www.weibo.com/6067696343/profi...\n\n►訂閱YouTube【眾量級CRWOD】\nhttps://is.gd/JgIQw6\n\n#整人PRANK#眾量級CROWD#情侶',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/ZQrfVXFM0x0/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/ZQrfVXFM0x0/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/ZQrfVXFM0x0/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: '眾量級CROWD',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/qdUBAKzj5N0KPtb4yPZhn93_GWg"',
         id: {
          kind: 'youtube#video',
          videoId: 'Q4ZP3qLGIi0'
         },
         snippet: {
          publishedAt: '2018-08-05T19:18:35.000Z',
          channelId: 'UCDwnj9LjCBE3X_EDNuX0xsA',
          title: '【第五人格】チェイス無理な人も好きになる？今より少しチェイスが上手くなる方法【IdentityV】',
          description: '初心者～中級者がぶち当たる壁、ハンターとのチェイス。\nなかなかうまく逃げれずに序盤ですぐにつかまってしまいませんか。\nまずは基本的な知識をつけて練習してみましょう：）\n※ステージ毎の強ポジは必ずおぼえよう╰( \'ω\' )╯\n（次回やるかも）\n深夜だったのもあって終始、超真面目に話してしまいました・・・笑\n\n今後IdentityVの動画を上げていきますのでチャンネル登録よろしくお願いします。\nhttps://goo.gl/EVLT9T\n\n\n▼勝率があがるかも？便利ツール作りました『Identity Skill Timer』\nhttps://nopiel.github.io/ID5_SkillTimer/\n\n■ご利用はご自由にどうぞ。チャンネル登録や高評価もらえると嬉しいです：）\n動画やブログでご利用・紹介いただける方はこの動画をご紹介いただけると幸いです。\n\n■使い方\nPCの場合はマウスでクリック、もしくはテンキーの数字１，２，３を押しても反応します。\nスマホの場合はタップするだけで動きます。\n・以下の動画でスキルタイマーの紹介していますのでよければ見てみてください。\nhttps://youtu.be/Z4u1-74MYbM\n\n\n▼ツイッターでも初心者の為のお役立ち情報出してます。お気軽にフォローください( \'ω\' )\nhttps://twitter.com/nopi_games',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/Q4ZP3qLGIi0/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/Q4ZP3qLGIi0/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/Q4ZP3qLGIi0/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'のぴ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/uPqSpxXs6ADBTS75Ftpx5WQMJVw"',
         id: {
          kind: 'youtube#video',
          videoId: '-mCphuw2ug0'
         },
         snippet: {
          publishedAt: '2018-08-31T10:13:23.000Z',
          channelId: 'UCJtMfSSPKuW22GXfkaN7DOA',
          title: '【荒野行動】野良で出会った淫乱萌え声JKの経験人数がエグ過ぎたWWW【ころん】',
          description: '【プレゼント企画中】\n今公式ラインを追加するだけで抽選で２０名の方にAmazonギフト券5000円分が当たります！\n応募締め切りは９月１日まで！\n沢山の応募待っています！\nこのURLをクリックするところんを友達追加できる画面に移動します【ラインの友達追加のところで(＠colon56n)で検索しても出てきます！】↓　↓　↓\nhttps://t.co/P4Wv4S1xJJ\n\n前回の動画→https://youtu.be/gMBcwmkGBaM\n\n荒野行動【スマホ版　PUBG】では攻略・裏技・チート・立ち回り・新武器紹介など様々な最新情報をお届けします。\n\n【基本毎日２０時投稿！！！】\n実況者：ころん\nチャンネル⇒(https://www.youtube.com/channel/UCJtMfSSPKuW22GXfkaN7DOA)\n\nお歌のチャンネル⇒(https://www.youtube.com/channel/UCONtV50EMkP5-zg_7lava4w)\n\nついったー：https://twitter.com/Colon56N\nYoutube通知アカウント：https://twitter.com/Colon56Nsab\n\n代表的な動画リスト\nヒューマンフォールフラット⇒(https://www.youtube.com/playlist?list=PLlXVjavS56Ir8q1_SgrTvsw-Tu_V8K2jO)\n\nハローネイバー⇒(https://www.youtube.com/playlist?list=PLlXVjavS56Ir7LOdgQy9ne1R8yOSzKx6T)\n\nマリオ実況⇒(https://www.youtube.com/playlist?list=PLlXVjavS56Ir5BBMH_MR5-bguWJdgOCdb)\n\nスプラ実況⇒(https://www.youtube.com/playlist?list=PLlXVjavS56IpwyLrxr0emKdTOXhUOLrQU)\n\nどうぶつの森 ポケットキャンプ⇒(https://www.youtube.com/playlist?list=PLlXVjavS56IpTs-YAm8WOfAlSI_aoIRPW)\n\n１３日の金曜日⇒(https://www.youtube.com/playlist?list=PLlXVjavS56Ip-kCouACnzIWyDUbAzkbd5)\n\nバカゲー　実況(https://www.youtube.com/playlist?list=PLlXVjavS56IrtC5PGb0vuBchlaS8LShqk)\n\n歌ってみた⇒(https://www.youtube.com/playlist?list=PLlXVjavS56Iodk55M2td4pgM5jiuEIQDR)\n\nギャングビースト⇒(https://www.youtube.com/playlist?list=PLlXVjavS56Iodk55M2td4pgM5jiuEIQDR)\n\nクソ動画⇒(https://www.youtube.com/playlist?list=PLlXVjavS56IptUMqwkRjW6BY1bJijzmeS)\n\nマリオオデッセイ⇒(https://www.youtube.com/playlist?list=PLlXVjavS56IqD73YLNKcU8QFhPCNum7da)',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/-mCphuw2ug0/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/-mCphuw2ug0/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/-mCphuw2ug0/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'ころんの実況',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/vwEIRGQ9RbwV1cjh7rUVUZ6y3M0"',
         id: {
          kind: 'youtube#video',
          videoId: 'WUWojrYywLA'
         },
         snippet: {
          publishedAt: '2018-04-23T12:12:30.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【神回】DBD1000時間プレイヤーが選ぶ最高に笑った試合Best１【Dead by Daylight】',
          description: 'ホントこの試合は笑ったｗまたセイバーちゃんに会いたい。\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n７万人ありがとう企画！\namazonギフト券5000×10名様\nプレゼント企画応募方法！\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\nメッセージで送るので受け取りをONにしておいてね！\n応募期間は4月末まで！\n\n【神回】DBD1000時間プレイヤーが選ぶ最高に笑った試合Best１【Dead by Daylight】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/WUWojrYywLA/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/WUWojrYywLA/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/WUWojrYywLA/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/7B8DdRoYY3YMvA0IMu2TADO1da0"',
         id: {
          kind: 'youtube#video',
          videoId: 'cddqM2140bI'
         },
         snippet: {
          publishedAt: '2018-08-30T12:04:43.000Z',
          channelId: 'UCeHMI9HfINaDivZWhxodMeA',
          title: '【第五人格】祭司の立ち回りについて！【IdentityV】【アイデンティティV】',
          description: 'Twitter 【＠piason_Identity】\n良かったらフォローしてください♪\n\n今回も1人やったけど解説頑張れた気がします！(・o・)\n少しでも気に入らんかったら撮り直すせいで投稿頻度遅れて申し訳ないです(/_;)\n少しでも参考になれたら嬉しいです！\nいつも沢山の応援のコメントありがとうございます(*‘ω‘ *)',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/cddqM2140bI/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/cddqM2140bI/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/cddqM2140bI/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'ピアソンのゲーム実況チャンネル',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/wwzgKdm0xcZ3dk-nd2nZDL-KlFU"',
         id: {
          kind: 'youtube#video',
          videoId: 'kr857LY4Fnk'
         },
         snippet: {
          publishedAt: '2018-07-10T08:58:04.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】キャンパー泣かせ！チート級の空軍のスキル構成と使い方を解説！ 【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          description: 'キラーの時に使われたくないサバイバーNo1の空軍です…キャンパー、キャンプに困っている方がコメント欄に居たので、キャンプ対策も…！\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/kr857LY4Fnk/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/kr857LY4Fnk/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/kr857LY4Fnk/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/NZezo3OEQyLXNnHDMI0hxxpMWlw"',
         id: {
          kind: 'youtube#video',
          videoId: 'MgcjprZMwjA'
         },
         snippet: {
          publishedAt: '2018-08-30T08:41:53.000Z',
          channelId: 'UCHpJRa9X7Tf9x2CZsQSemcA',
          title: '【第五人格】新サバイバー"調香師"追加されたのでガチャ100連でぶち当てたる【IdentityⅤ】',
          description: '香ってきやがる...\n\n\nよかったらチャンネル登録お願いします↓\nhttps://goo.gl/UeUjnj\n\n【Twitter】\nおちゃ►https://twitter.com/ocya_gw\nえいた►https://twitter.com/eita_1988\n\n編集・みや校長\n\n#第五人格\n\n——',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/MgcjprZMwjA/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/MgcjprZMwjA/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/MgcjprZMwjA/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さよドラ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/o940GRBT-kMNliMk9uVjmYX7cC8"',
         id: {
          kind: 'youtube#video',
          videoId: 'GGy8YupZHWw'
         },
         snippet: {
          publishedAt: '2018-08-31T09:12:11.000Z',
          channelId: 'UCvacposeaJsecsBgrydPlTw',
          title: '【Identity V】開幕0台チェイスあるある   今日のランク戦#36【第五人格 アジア鯖 オフェンス】',
          description: 'オフェンスの責任は重大である。\n救助ミスれば叩かれ、解読しても叩かれる。\n\n\nついったー \nhttps://twitter.com/Dannnna__sama\n\nみらてぃぶ \nhttps://www.mirrativ.com/user/3907373',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/GGy8YupZHWw/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/GGy8YupZHWw/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/GGy8YupZHWw/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: '。旦那さま',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/CFNGR-f1fVQaa4XNd1DhmlOdmog"',
         id: {
          kind: 'youtube#video',
          videoId: 'BB_oatS2u0c'
         },
         snippet: {
          publishedAt: '2018-08-24T12:10:58.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】最強と騒がれてた新ハンタータコで遊んでみた！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【タコ】',
          description: '最強と騒がれてた新ハンタータコで遊んでみた！\nチャンネル登録お願いします！↓\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n\n【第五人格】最強と騒がれてた新ハンタータコで遊んでみた！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【タコ】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/BB_oatS2u0c/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/BB_oatS2u0c/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/BB_oatS2u0c/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/rtqNI3oD_WoQX6y6yIeGXSQ0zSM"',
         id: {
          kind: 'youtube#video',
          videoId: 'ZIVrKuqY450'
         },
         snippet: {
          publishedAt: '2018-08-30T08:47:19.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】闇ガチャに搾取されていく様を見れる動画【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【調香師】',
          description: '調香師かわいいペロ\nチャンネル登録お願いします！↓\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n\n【第五人格】新ステージ湖景村に隠された宝箱が凄すぎるｗ【IdentityⅤ】【アイデンティティファイブ】【日本語版】【',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/ZIVrKuqY450/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/ZIVrKuqY450/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/ZIVrKuqY450/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Vc5jFKVGoRXaZ2PNGvhPGESIupg"',
         id: {
          kind: 'youtube#video',
          videoId: 'Fh0Nqo0Q5a4'
         },
         snippet: {
          publishedAt: '2018-08-22T08:27:16.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】野良で遊んでたら喧嘩に巻き込まれたｗｗ【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【泥棒】',
          description: '孫の代まで語り継がれるって所が好きです(自画自賛)\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n逆にピエロを追いかけまわしてみた結果\n\n【第五人格】野良で遊んでたら喧嘩に巻き込まれたｗｗ【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【泥棒】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/Fh0Nqo0Q5a4/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/Fh0Nqo0Q5a4/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/Fh0Nqo0Q5a4/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/P82q0nnicUoB7rW-NRhrvJgGxm4"',
         id: {
          kind: 'youtube#video',
          videoId: 't0__utKgR80'
         },
         snippet: {
          publishedAt: '2018-08-17T11:24:51.000Z',
          channelId: 'UCKgYOGz_UcYkc2oP5mvE3_w',
          title: '【第五人格】《コラボ実況》 祭司４人なら永遠にハンターに捕まらないんじゃね説 検証してみた【Identity V】',
          description: '第三回コラボ実況\n今回は祭司４人でワープ作りまくれば一生チェイス出来るんじゃないか説を検証したいと思います。\n最後はかなり面白いネタ回になったけど楽しく撮影出来ました^^\n\nコラボ相手様のチャンネルはこちら\nsht GIGAさん↓\nhttps://www.youtube.com/channel/UCBtBcVCnOeGnL8qdfOjUzeA\n\n実況者まがれつ2ndさん↓\nhttps://www.youtube.com/channel/UC_70NSgbizG_lpRpva2m1qw\n\nこちらでも実況動画がアップされますので確認お願いします！\n\n\n↓プレゼント企画についてはこちらの動画を視聴してください。\nhttps://www.youtube.com/watch?v=jH6lgsFbVrE\n\n\n定期的に第五人格 Identity Vの実況解説動画やライブ配信を行なっています。\n是非チャンネル登録、高評価の方よろしくお願いします！\n\n【YouTubeチャンネル】絶対死なないマン\nhttps://www.youtube.com/channel/UCKgYOGz_UcYkc2oP5mvE3_w\n\n【Twitter】\n@marumaruTV\n\n【第五人格再生リスト】\nhttps://www.youtube.com/playlist?list=PLele7jwe-PuZ0PLW22KQlEpQGIaWTqn6y',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/t0__utKgR80/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/t0__utKgR80/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/t0__utKgR80/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: '絶対死なないマン',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/SwcAt4tEnY-JY8jt-uNot_nSoDw"',
         id: {
          kind: 'youtube#video',
          videoId: '0jwbUQuKdXg'
         },
         snippet: {
          publishedAt: '2018-08-31T09:03:04.000Z',
          channelId: 'UCZvAcJaVf3WTOcWs6rczWcA',
          title: '【第五人格】調香師ウィラ・ナイエルは妻である前に女でありたい #47【Identity V】',
          description: '第五人格‐Identity Vを実況プレイ！\n\nマジシャンと似た扱いをされてるみたいだけど\n個人的にはマジシャン(おじさん)よりは調香師(人妻)←\n\n少しでも面白いと思っていただけたのなら高評価＆チャンネル登録よろしくお願い致します(｀・ω・´)\n\nツイッター ◇ https://twitter.com/musikera_life',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/0jwbUQuKdXg/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/0jwbUQuKdXg/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/0jwbUQuKdXg/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'ムシケラ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/01xuXXEIt1GiahdfKKsVhexvquE"',
         id: {
          kind: 'youtube#video',
          videoId: '8hRElSNd4ow'
         },
         snippet: {
          publishedAt: '2018-07-23T11:23:35.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】ハンターの勝率が100%あがる裏技【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【ピエロ】',
          description: '知ってると知らないのでは天と地ほどの差が出るので是非！動画では語ってないのですがレオのパペット投げても強いです！\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\nプレゼント企画応募方法！\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/8hRElSNd4ow/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/8hRElSNd4ow/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/8hRElSNd4ow/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/NRSAOPoOpso7GxL8lLtZDt6Hk0M"',
         id: {
          kind: 'youtube#video',
          videoId: 'xN8Bd31-wS8'
         },
         snippet: {
          publishedAt: '2018-08-13T11:03:09.000Z',
          channelId: 'UC6MlluylILbTelNRAvofO1w',
          title: '【第五人格】泥棒4人で懐中電灯🔦当てまくったら鬼が止まったw【IdentityV:実況者ジャンヌ】',
          description: 'さかなGameさん\nhttps://www.youtube.com/channel/UCKRxSVu3yZPqL5jGfKydQLg/videos\n\nリアル泥棒\nhttps://www.youtube.com/channel/UC_70NSgbizG_lpRpva2m1qw\n\nGIGAさん\nhttps://www.youtube.com/channel/UCBtBcVCnOeGnL8qdfOjUzeA/videos\n\n【Twitter】応援コメント,リクエスト,質問は全てこちらまで!!↓\n【@bulletjda】 https://twitter.com/bulletjda\n【Instagram】\nhttps://www.instagram.com/jda0106/\n\nAtSAクランの新規メンバー募集しております!!\nhttps://ssl.form-mailer.jp/fms/48076d4f558683\n\n【CoD WW2の再生リストはこちら↓】\nhttps://www.youtube.com/playlist?list=PLoVj4uT0mwx0vpDIOrIYbX0ERJhq5Xeny&disable_polymer=true\n\nJDAが使ってるコントローラーはこちら!↓RED WINGS様URL\nhttp://scuf-redwings.jimdo.com/\n【CURBX】http://amzn.asia/iEbMrVr\n【RAISX】http://amzn.asia/6MynQ0G\n\nしまリス堂 様 naconやXim4と言った様々なデバイスが安く購入出来ます!!\nhttps://www.shimarisudou.com/\n\n情報提供はEAA様公認で頂いてます。EAA様 URL↓\nhttp://fpsjp.net/\nhttps://www.youtube.com/channel/UCLIpsTraUMqES8FRDIWNc_A\n\nジャンヌのOP名が気になる方はこちらから!↓\nhttps://www.youtube.com/watch?v=3ezTdaKzlxg&t=145s\n\nBGM、SEをお借りしてるサイト↓魔王魂様 ※ニコ二コモンズ,NCSも使用中\nhttp://maoudamashii.jokersounds.com/\nhttps://www.youtube.com/user/NoCopyrightSounds',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/xN8Bd31-wS8/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/xN8Bd31-wS8/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/xN8Bd31-wS8/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: '実況者ジャンヌ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/oWLE2Ya17kn7zzSY-ur1Ito3i0Q"',
         id: {
          kind: 'youtube#video',
          videoId: 'BqpPD8AHW0s'
         },
         snippet: {
          publishedAt: '2018-08-16T09:50:36.000Z',
          channelId: 'UCzqoAFObkB3Ptp92Jqg7CWQ',
          title: '【第５人格-アイデンティティＶ-】新キャラ『カウボーイ』があまりにも強すぎる！！『超強化レオ』を超えるぶっ壊れサバイバー！？【攻略実況：32】| スマホ版 DBD Identity V',
          description: '次の動画：マジシャン12人であそぶｗｗ\nhttps://www.youtube.com/watch?v=1tM4Qmke7e8\n\n前の動画：第１回『かくれんぼ大会！』冒険家ﾁｬﾚﾝｼﾞ\nhttps://www.youtube.com/watch?v=D0PiRlmVnGI\n\nアイデンティティＶ 攻略実況リスト\nhttps://www.youtube.com/watch?v=3np3AkqlZ2Q&list=PLfnCnzOsKubUhnMJ7faCuUU7Sh1_hthiM&t=0s&index=2\n\nあいもです。最強のおにぃになる(・ス・)و \n\nオフェンスの上位互換と言ってもいい救助キャラですね\nいつもウィリアム使ってるから悲しいような嬉しいようなｗ\n強くておもしろいのは間違いない。早く遊びたいなぁ～\n\n\nこの動画のゲーム：第５人格 -アイデンティティＶ-\nIdentity V　Dead by Daylight(DBD)\n\n\nブログ http://imonomono.blog.fc2.com/\nツイッター https://twitter.com/imonomonomo',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/BqpPD8AHW0s/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/BqpPD8AHW0s/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/BqpPD8AHW0s/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'あいも',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/ReWQHh2fdsR8Hs-1V_-rZg8oGuY"',
         id: {
          kind: 'youtube#video',
          videoId: 'y4h0x9dJh3w'
         },
         snippet: {
          publishedAt: '2018-08-07T04:22:12.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】ダルすぎて相手が死ぬ 超遅延型ピエロ！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【ピエロ】',
          description: 'よくめんどくさい男と言われてきたのでめどくさいピエロを作ってみました（´◉◞౪◟◉)\n\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\nダルすぎて相手が死ぬ 超遅延型ピエロ！',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/y4h0x9dJh3w/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/y4h0x9dJh3w/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/y4h0x9dJh3w/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/muDEhkSc2-qbX1rywjf01Q4lyQ0"',
         id: {
          kind: 'youtube#video',
          videoId: 'cyA2OK5sDKw'
         },
         snippet: {
          publishedAt: '2018-08-30T07:41:00.000Z',
          channelId: 'UCzqoAFObkB3Ptp92Jqg7CWQ',
          title: '【第５人格-アイデンティティＶ-】黒白無常(宿傘の魂)解禁！！！未知のスキル効果がついに判明！【攻略実況：42】| スマホ版 DBD Identity V',
          description: '次の動画：ダブルハンターモード『タコリッパー！』\nhttps://www.youtube.com/watch?v=WJP45cKXEHQ\n\n前の動画：１vs１でもよゆ～♪ ってゴリさん！？\nhttps://www.youtube.com/watch?v=Qpv5SyfhJbE\n\nアイデンティティＶ 攻略実況リスト\nhttps://www.youtube.com/watch?v=3np3AkqlZ2Q&list=PLfnCnzOsKubUhnMJ7faCuUU7Sh1_hthiM&t=0s&index=2\n\nあいもです。最強のおにぃになる(・ス・)و \n\nなかなかテクニカルなキャラですね。やりこむと鬼強そう\n見た目もかなり好みだから日本に来たら使いまくりたい\n撮影師も楽しみだなぁ～とりあえず次ダブルハンターやる！\n\n\nこの動画のゲーム：第５人格 -アイデンティティＶ-\nIdentity V　Dead by Daylight(DBD)\n\n\nブログ http://imonomono.blog.fc2.com/\nツイッター https://twitter.com/imonomonomo',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/cyA2OK5sDKw/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/cyA2OK5sDKw/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/cyA2OK5sDKw/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'あいも',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Yekau42UBrffdkqfaww7WPe_zKU"',
         id: {
          kind: 'youtube#video',
          videoId: 'CqUz99giMA0'
         },
         snippet: {
          publishedAt: '2018-07-11T09:09:34.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】オフェンスが強すぎるｗ 暗号機５個分のチェイス！ 【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          description: '新キャラのオフェンスで暗号機５個分のチェイスをしました…\n空軍や医師や傭兵も好きですがオフェンスが使ってて一番楽しかったです！！！！オススメ！！！！\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/CqUz99giMA0/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/CqUz99giMA0/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/CqUz99giMA0/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/EP_4ZHiO8y7CB3EFqZyyVez8SS4"',
         id: {
          kind: 'youtube#video',
          videoId: 'EM3cqdwZXZw'
         },
         snippet: {
          publishedAt: '2018-08-28T10:58:25.000Z',
          channelId: 'UC6MlluylILbTelNRAvofO1w',
          title: '【第五人格】次回 新サバイバー!『自分だけ時間を戻せて無傷救出!!※3回限定』【調香師:実況者ジャンヌ】',
          description: 'OWのトレーサーの様に巻き戻せる機能があるんで、汎用性は高いです! ただ限りがあるので、上ランクではあんまり好まれてないらしいです(\';\')\n皆さんの意見お待ちしてます(:3\n【Twitter】応援コメント,リクエスト,質問は全てこちらまで!!↓\n【@bulletjda】 https://twitter.com/bulletjda\n【Instagram】\nhttps://www.instagram.com/jda0106/\n\nAtSAクランの新規メンバー募集しております!!\nhttps://ssl.form-mailer.jp/fms/48076d4f558683\n\n【CoD WW2の再生リストはこちら↓】\nhttps://www.youtube.com/playlist?list=PLoVj4uT0mwx0vpDIOrIYbX0ERJhq5Xeny&disable_polymer=true\n\nJDAが使ってるコントローラーはこちら!↓RED WINGS様URL\nhttp://scuf-redwings.jimdo.com/\n【CURBX】http://amzn.asia/iEbMrVr\n【RAISX】http://amzn.asia/6MynQ0G\n\nしまリス堂 様 naconやXim4と言った様々なデバイスが安く購入出来ます!!\nhttps://www.shimarisudou.com/\n\n情報提供はEAA様公認で頂いてます。EAA様 URL↓\nhttp://fpsjp.net/\nhttps://www.youtube.com/channel/UCLIpsTraUMqES8FRDIWNc_A\n\nジャンヌのOP名が気になる方はこちらから!↓\nhttps://www.youtube.com/watch?v=3ezTdaKzlxg&t=145s\n\nBGM、SEをお借りしてるサイト↓魔王魂様 ※ニコ二コモンズ,NCSも使用中\nhttp://maoudamashii.jokersounds.com/\nhttps://www.youtube.com/user/NoCopyrightSounds',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/EM3cqdwZXZw/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/EM3cqdwZXZw/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/EM3cqdwZXZw/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: '実況者ジャンヌ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bOm8YDoqjBGDj_JO-YiyYzZz8KM"',
         id: {
          kind: 'youtube#video',
          videoId: 'iwFejWb41ok'
         },
         snippet: {
          publishedAt: '2018-08-29T17:13:37.000Z',
          channelId: 'UCDwnj9LjCBE3X_EDNuX0xsA',
          title: '【第五人格】怒られたくない！正しい救助方法と勝ちに繋がる考え方【IdentityV】',
          description: '今回は誰しもが経験しなければならない「救助」\n良かれと思って助けたのに怒られることもありますよね！\n今回はサバイバー目線とハンター目線の話を織り交ぜながら\n試合に勝つための救助について説明したいと思います：）\nかなり詰め込んだので頭から流れ出てしまいそうですが、\nがんばってみてみてください～！\nでもかなり長くなっちゃいました_(:3」∠)_ \nめっちゃ眠くなるかもしれません笑\n\nハンターの目線は唯一の配信者お友達、ランカーのプリコさんに協力してもらいました。\n■プリコさんのチャンネル\nhttps://www.youtube.com/channel/UCom7eFSGTB1Nb_IfQVy1mrg\n\n\nこれからもIdentityVの動画を上げていきますのでチャンネル登録よろしくお願いします。\nhttps://www.youtube.com/nopiel\n\n\n▼立ち回りの基本はこちらがおすすめです\n・チェイス無理な人も好きになる？今より少しチェイスが上手くなる方法\nhttps://youtu.be/Q4ZP3qLGIi0\n\n・脱初心者立ち回り総まとめ！少しだけ世界が変わる立ち回りの掟\nhttps://youtu.be/yi6JUCKz7cA\n\n▼状況判断できていない方はこちらもおすすめです\n音で出来る状況判断！君のサバイバーの腕前を計ろう！効果音クイズ\nhttps://youtu.be/vSoXXdrjtJ8\n\n▼少しでも有利に立ち回る為の豆知識まとめました\nhttps://www.youtube.com/watch?v=2x53DoXXkTA&t=6s\n\n▼勝率があがるかも？便利ツール作りました『Identity Skill Timer』\nhttps://nopiel.github.io/ID5_SkillTimer/\n\n▼ツイッターでも初心者の為のお役立ち情報出してます。お気軽にフォローください( \'ω\' )\nhttps://twitter.com/nopi_games',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/iwFejWb41ok/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/iwFejWb41ok/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/iwFejWb41ok/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'のぴ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/zKC74bVwS1lCoC3Z1uc4ZyXz7gY"',
         id: {
          kind: 'youtube#video',
          videoId: 'yKrWYZOMEAE'
         },
         snippet: {
          publishedAt: '2018-08-19T08:49:50.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】初心者の友人に嘘ばっか教えてたら大変な事になった  【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【ドッキリ】',
          description: 'めちゃくちゃおもしろかった…またやりたい…\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n【第五人格】完全初心者の友人に嘘ばっか教えてたら大変な事になった  【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【ドッキリ】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/yKrWYZOMEAE/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/yKrWYZOMEAE/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/yKrWYZOMEAE/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/V8YEu5ldLYY5hvPLIcXE2yx1rDw"',
         id: {
          kind: 'youtube#video',
          videoId: 'CX7d4l5rZjo'
         },
         snippet: {
          publishedAt: '2018-08-02T05:29:26.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】芸者対策！芸者から10分間チェイスする方法教えます！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【芸者】【Geisha】',
          description: '芸者とチェイスするのすごい面白い！！\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://www.youtube.com/playlist?list=PLTBSwEBhAd_mEFW3nwgau4FhfIsgkCmp0 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/CX7d4l5rZjo/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/CX7d4l5rZjo/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/CX7d4l5rZjo/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/lq_2Jw0eFoWPb76gWhclDI4Q608"',
         id: {
          kind: 'youtube#video',
          videoId: 'e2mGgqagmFE'
         },
         snippet: {
          publishedAt: '2018-07-14T10:21:26.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】始めたばかりの方に見てほしい！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【初心者】',
          description: '初めたての方、初心者の少しでも助けになれば幸いです！\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\nついにアンドロイド版も始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/e2mGgqagmFE/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/e2mGgqagmFE/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/e2mGgqagmFE/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/AdC3wtRw0kd3efx3UbI-EJV5FgM"',
         id: {
          kind: 'youtube#video',
          videoId: 'fMFaVHp31As'
         },
         snippet: {
          publishedAt: '2018-07-23T11:58:37.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】瞬間移動ピエロで敵を殴りまくるのが楽しい！人格公開も！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【ピエロ】',
          description: '瞬間移動ピエロが楽しすぎる！！！！オススメです！！！\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\nプレゼント企画応募方法！\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/fMFaVHp31As/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/fMFaVHp31As/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/fMFaVHp31As/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/P3a1cbjivP4WU13PG-2Q5E4Jwa8"',
         id: {
          kind: 'youtube#video',
          videoId: 'Ntpc4ulK1_o'
         },
         snippet: {
          publishedAt: '2018-08-10T07:54:19.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】パペットの索敵範囲を検証してみたら驚きの結果に…【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【レオ】',
          description: 'パペットの範囲ってこんなに広かったんだね…\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n逆にピエロを追いかけまわしてみた結果',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/Ntpc4ulK1_o/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/Ntpc4ulK1_o/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/Ntpc4ulK1_o/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/x53ChJXijAlnnLfxQvaOLRub3gg"',
         id: {
          kind: 'youtube#video',
          videoId: 'c7xQ9R-U1l4'
         },
         snippet: {
          publishedAt: '2018-08-20T07:47:05.000Z',
          channelId: 'UCmE8sLhT9d2XScGkwojX30Q',
          title: '(第五人格 Identity V)殴らないけど強いw漁村で激レア鬼「やさ鬼」に出逢った(IdentityV実況)',
          description: '(第五人格 Identity V IdentityV)スマホ版Dead by Daylight実況！\nスナザメです。チャンネル登録・twitter登録お願いします！\n【チャンネル登録】　https://goo.gl/JgdDRa\n【ツイッター】　https://twitter.com/sunazame\n\n(第五人格 Identity V)スマホ版Dead by Daylight再生リストはこちら\n→https://goo.gl/nZBWSi\n\n【ニコニコでの活動】　http://www.nicovideo.jp/mylist/7020648',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/c7xQ9R-U1l4/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/c7xQ9R-U1l4/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/c7xQ9R-U1l4/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'スナザメ 第五人格・人狼ジャッジメント・実況',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/tYRLplXCDhOjhWYDcy5aoGbBxeo"',
         id: {
          kind: 'youtube#video',
          videoId: 'v6Cvoq5xXEY'
         },
         snippet: {
          publishedAt: '2018-08-01T09:42:24.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】圧倒的殲滅力！瞬間移動芸者が強すぎる！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【芸者】【Geisha】',
          description: '本当に強い…サバイバーの時どうしよう…逃げれる気がしない…\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://www.youtube.com/playlist?list=PLTBSwEBhAd_mEFW3nwgau4FhfIsgkCmp0 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や泥棒や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/v6Cvoq5xXEY/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/v6Cvoq5xXEY/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/v6Cvoq5xXEY/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/XA365bcEa4Kmo_xIS2YVZUto8rM"',
         id: {
          kind: 'youtube#video',
          videoId: 'jg-DhGUu_y4'
         },
         snippet: {
          publishedAt: '2018-08-03T04:38:56.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】結局さ、どのハンターが一番強いの？【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【芸者】【Geisha】',
          description: 'よくコメント欄で質問されるので動画で答えます！あくまで僕個人の考えです！\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://www.youtube.com/playlist?list=PLTBSwEBhAd_mEFW3nwgau4FhfIsgkCmp0 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n \n#第五人格 #IdentityⅤ',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/jg-DhGUu_y4/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/jg-DhGUu_y4/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/jg-DhGUu_y4/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/rlqJJ1jF8x6F5UcaGt98t2x86gI"',
         id: {
          kind: 'youtube#video',
          videoId: 'FuNznMYQxVg'
         },
         snippet: {
          publishedAt: '2018-08-30T10:55:14.000Z',
          channelId: 'UCzJrczib7tDWUTZLDHnldsQ',
          title: '【第五人格】ダブルハンターやってみたwww芸者リッパー！実況動画【IdentityⅤ】【アイデンティティファイブ】チェイス人格',
          description: '今回の第五人格動画はダブルハンターモードを宿傘の魂(黒白無常)とタコでやろうと思ったらまさかの使用できず！リッパーとタコを使ってみました！今回はちゃんと解説したつもりです。新ハンタータコのハスターや新マップ海賊湖景村で盛り上がっている中で【第五人格】新ハンター宿傘の魂(黒白無常)ガチャ限を出るまでやってみた湖景村・黄衣王タコリリース日宿傘の魂(黒白無常・白黒無常)のガチャを出るまでやってみたらwwwのIdentityⅤいやアイデンティティファイブ動画も見てねhttps://youtu.be/hcqtadXHXYM\n\n\n今回の第五人格動画は宿傘の魂(黒白無常・白黒無常)動画です！新ハンタータコのハスターや新マップ海賊湖景村で盛り上がっている中で宿傘の魂(黒白無常・白黒無常)のガチャを出るまでやってみたらwwwのIdentityⅤいやアイデンティティファイブ動画です！湖景村・黄衣王タコハスターリリース日ということもあり日本版もやりたい！！忙しい一日ですｗ前回の動画は全ハッチ船に近い順で紹介TOP5です！それと黄衣王タコのハスター使ってみた動画もおまけであります。早速アイデンティティファイブいやIdentityⅤ実況してみましたので見てねhttps://youtu.be/MAXVXVM_srk\n\n【第五人格】港と海賊船イベントガチャやってみたwww新マップ遊園地直前記念！実況動画【IdentityⅤ】【アイデンティティファイブ】祭司とカウボーイはまた明日です。今回の動画は第五人格！祭司やカウボーイや遊園地で盛り上がってる中国版の最新イベントをご紹介！もうすぐで日本に上陸する港・海賊船マップですが、おそらく同時に開催されると思う海賊ガチャをやってみました。１０連よりも単発を重ねるほうが出やすいという話を聞いたのでやりましたがけっかはいかに？中国ではそろそろ遊園地マップがくるらしいですよーhttps://youtu.be/KnrlLdXXPz4\n\n前回の動画は第五人格動画はカウボーイ使ってみた！です。祭司の解禁日にまさかの新キャラが登場！早速アイデンティティファイブいやIdentityⅤ実況してみました。第五人格の隠しキャラを手に入れて実際にプレイする実況動画です。IdentityVの中国版アカウントの動画です。アイデンティティファイブ！前回の動画は【第五人格】祭司が居れば仲間の救出100％成功する説！を検証したら驚きの結果が【IdentityV】今回はidentity Vの新キャラ祭司祭司が居れば仲間の救出100％成功する説！を検証したら驚きの結果になりました。無限にワープが出来る門の鍵を持つ祭司がチームに1人入れば仲間を助けられるのではないか！という浅はかな夢を持ちプレイ！中国版の第５人格・アイデンティティＶが凄いことになってます！\nhttps://youtu.be/eZkH5MKQLAc\n\n\n#第五人格\n#アイデンティティＶ\n#黒白無常',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/FuNznMYQxVg/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/FuNznMYQxVg/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/FuNznMYQxVg/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'りきゃっとあいす[こじかる,あさひな]',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/3zts7yCDYkGLahPxknCrElS5kVc"',
         id: {
          kind: 'youtube#video',
          videoId: 'XTRHmtVb_7w'
         },
         snippet: {
          publishedAt: '2018-08-11T05:56:49.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】ワープがチート級！新サバイバー祭司が楽しすぎるｗｗｗ【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【祭司】',
          description: 'ワープは別格だ‥\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\nさとみだよぉ～\n\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n逆にピエロを追いかけまわしてみた結果',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/XTRHmtVb_7w/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/XTRHmtVb_7w/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/XTRHmtVb_7w/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/AKRZSwFHU9SOXZ8sIw-5uA1Rnbw"',
         id: {
          kind: 'youtube#video',
          videoId: 'al3AQ4Pc3yg'
         },
         snippet: {
          publishedAt: '2018-08-09T14:44:11.000Z',
          channelId: 'UCbttkpO719g-UZk9piWgvtA',
          title: '【第五人格】5連勝するまで終われまてん【Identity V】【アイデンティティV】',
          description: '■ルール\n同じキャラは使えない\n非チェイスキャラ、チェイスキャラを1回ずつ使う\n負けたらまた初めからやり直し\n引き分けの場合はノーカウントで次の試合へ（ただ使用したキャラはもう使えない）\n※救済措置\n一時間ごとに同じキャラをもう一回使ってもよいこととする\n仮に達成できなそうだったらまた次回に続きをする\n\n名前:Shogun@youtube\nID:410196\n↑スムーズに参加型が出来るので、申請しといていただけると嬉しいです！\n\n参加型ルール：毎試合終わった後に行きたい方はいるか募ります。その時にランダムで三人選んで毎試合臨んでいきます。\n※毎日参加型やるわけではありません!\n主に週末にやります。\n\n-----------------------------------------------------------------------------\n■配信を視聴してくれている方々へ\n不快なコメント・誹謗中傷・連投コメント・自分語り・掲示板のように扱うなどはお控え下さい。\nあまりに酷いと主の主観で知らぬ間にブロック対象、そしてブロック致しますのでお気を付けください。\n-----------------------------------------------------------------------------\n\n\n■基本的にソロプレイ\n視聴者参加ありは概要欄かタイトル、もしくは口頭で\n言っている時にやります。\n\nSupport the stream: https://streamlabs.com/shogun\n ※プレイに集中していてコメント返せない場合がございます。\n\n■配信中クルクルするという方がいますが、その際は画質を落とす、もしくは再読み込みしてみてください。\nまたsafariからではなく、Google Chromeで見るとより見やすいです。ぜひお試しあれ！\n\n【しょうぐん】\nhttps://www.youtube.com/channel/UCbttkpO719g-UZk9piWgvtA/about?disable_polymer=1\n\n★Twitter\n https://twitter.com/shogun_channel\n\n\n●【他のおすすめ動画】\n\n【Rust】 リアル版マインクラフト\n https://www.youtube.com/watch?v=toKgZkk-z28&list=PLj42ehyiX4MsnDvHtqcnR4yM1FfNJun_r\n\n【Dead by Daylight】PC版鬼ごっこ（本家）\nhttps://www.youtube.com/watch?v=wl8WnrQlQ_U&list=PLj42ehyiX4Mty21yqdCPet4KMLHQWmUZ1\n\n【The Forest】飛行機事故で謎の森へ迷い込んでしまった主人公を操作し、大自然の 脅威や謎のミュータントと戦いながら生き残りを図る。\n https://www.youtube.com/watch?v=vNhDBXhk5g0&list=PLj42ehyiX4Ms-EwvxHNNZnjlPeLNTdy1R',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/al3AQ4Pc3yg/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/al3AQ4Pc3yg/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/al3AQ4Pc3yg/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'しょうぐん',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/4auohiFF4600sjWjN_rEwz0ejXU"',
         id: {
          kind: 'youtube#video',
          videoId: 'Ze8MzXdroSo'
         },
         snippet: {
          publishedAt: '2018-08-18T07:22:53.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】 ゼッタイニ貴方をハナサナイオフェンス君 【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【オフェンス】',
          description: '死ぬまで勝手について行くよッ！ストーカーじゃねぇよッ！\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n【第五人格】 ゼッタイニ貴方をニガサナイオフェンス君 【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【オフェンス】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/Ze8MzXdroSo/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/Ze8MzXdroSo/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/Ze8MzXdroSo/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/yonX6EBsQy0vlhzvRVS1UQEI_fA"',
         id: {
          kind: 'youtube#video',
          videoId: 'FhlqTquEeiQ'
         },
         snippet: {
          publishedAt: '2018-08-31T11:55:25.000Z',
          channelId: 'UCmE8sLhT9d2XScGkwojX30Q',
          title: '第五人格の生放送',
          description: '(第五人格 Identity V IdentityV)スマホ版Dead by Daylight実況！\nスナザメです。チャンネル登録・twitter登録お願いします！\n【チャンネル登録】　https://goo.gl/JgdDRa\n【ツイッター】　https://twitter.com/sunazame\n\n(第五人格 Identity V)スマホ版Dead by Daylight再生リストはこちら\n→https://goo.gl/nZBWSi\n\n【ニコニコでの活動】　http://www.nicovideo.jp/mylist/7020648',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/FhlqTquEeiQ/default_live.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/FhlqTquEeiQ/mqdefault_live.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/FhlqTquEeiQ/hqdefault_live.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'スナザメ 第五人格・人狼ジャッジメント・実況',
          liveBroadcastContent: 'live'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/3tf7TSi5JcOsG3gFIbx3WvL6TUw"',
         id: {
          kind: 'youtube#video',
          videoId: 'vvMPzbXOXEM'
         },
         snippet: {
          publishedAt: '2018-08-12T08:54:50.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】多重解読の術！世界一面倒な機械技師！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【機械技師】',
          description: '機械技師の人形優秀すぎィ！！！！\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍やオフェンス、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/vvMPzbXOXEM/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/vvMPzbXOXEM/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/vvMPzbXOXEM/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/We_DDynDdukbNUFmzimHRabWIGQ"',
         id: {
          kind: 'youtube#video',
          videoId: 'hy1Vq6X8yZY'
         },
         snippet: {
          publishedAt: '2018-08-25T12:31:19.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】新ステージ湖景村に隠された宝箱が凄すぎるｗ【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          description: '第四次宝箱争奪戦が幕を開ける\nチャンネル登録お願いします！↓\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n\n【第五人格】新ステージ湖景村に隠された宝箱が凄すぎるｗ【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/hy1Vq6X8yZY/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/hy1Vq6X8yZY/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/hy1Vq6X8yZY/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/uDTNUul-MhvrULfc_GIU4n6ETQs"',
         id: {
          kind: 'youtube#video',
          videoId: 'eOl_PQ0VDeU'
         },
         snippet: {
          publishedAt: '2018-08-23T08:46:37.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】タコが欲しくて闇ガチャに挑んだ結果過去最悪の事態に【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【タコ】',
          description: 'それでも俺はガチャを回す…タコ…\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n\n【第五人格】タコが欲しくて闇ガチャに挑んだ結果過去最悪の事態に【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【タコ】',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/eOl_PQ0VDeU/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/eOl_PQ0VDeU/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/eOl_PQ0VDeU/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/SVPAc7_16y0C9YhlzHjnJATa1AM"',
         id: {
          kind: 'youtube#video',
          videoId: 'H2-Ywpj94GM'
         },
         snippet: {
          publishedAt: '2018-08-21T07:35:25.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】チャットの有用性について【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【空軍】',
          description: 'チャットを制すものはゲームを制す　さとを\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n逆にピエロを追いかけまわしてみた結果',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/H2-Ywpj94GM/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/H2-Ywpj94GM/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/H2-Ywpj94GM/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/7uvP2tB9QK6KztP9zJB6VzC8sNE"',
         id: {
          kind: 'youtube#video',
          videoId: 'b4urkMvt7oE'
         },
         snippet: {
          publishedAt: '2018-08-12T22:12:51.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】 野良で出会ったオフェンス君に煽られた 【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【ピエロ】',
          description: 'オフェンス本当に怖い　顔が\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\nさとみだよぉ～\n\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n逆にピエロを追いかけまわしてみた結果',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/b4urkMvt7oE/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/b4urkMvt7oE/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/b4urkMvt7oE/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/NoXwzO1__t7-Oyqt9qFMg3idX8Q"',
         id: {
          kind: 'youtube#video',
          videoId: 'vu7ciO0J6yg'
         },
         snippet: {
          publishedAt: '2018-08-09T09:02:51.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】遮蔽物を貫通せよ！新サバイバー祭司で遊んでみた！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】【祭司】',
          description: 'なんでもいいですけど胸の下が少し空いているのがとても評価できます。\n↓是非チャンネル登録宜しくお願いします！\nhttps://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\n豪華ゲーム実況者による夏のプレゼント企画！↓\n【 https://youtu.be/rFW6Kkk7emY 】\n\nさとみ10万人記念プレゼント企画応募方法！【上記のとは別】\n\n① チャンネル登録\n② 通知登録\n③ この動画にコメントで完了！「うぽつ」　などでもＯＫ\n\n当選者の発表は９月１日にあげる当選動画をご確認ください！\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。\n逆にピエロを追いかけまわしてみた結果',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/vu7ciO0J6yg/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/vu7ciO0J6yg/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/vu7ciO0J6yg/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/FB0Gtvp7SbVESecmbHRjTapJjBI"',
         id: {
          kind: 'youtube#video',
          videoId: 'VGAS4Z4s9mc'
         },
         snippet: {
          publishedAt: '2018-07-16T10:08:50.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】嫌がらせの極み乙女　筋肉ムキムキ泥棒【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          description: '筋肉ムキムキ泥棒がウザすぎるｗｗ\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_\n\nついに始動…！スマホ版デッドバイデイライト - 第五人格 -日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n医師や空軍や機械技師、初心者向けの動画もあげておりますのでそちらもよろしくお願いします。',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/VGAS4Z4s9mc/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/VGAS4Z4s9mc/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/VGAS4Z4s9mc/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/NMFfAal0JIyJBMMWJFUeZE68ZGk"',
         id: {
          kind: 'youtube#video',
          videoId: 'vag-Axcm664'
         },
         snippet: {
          publishedAt: '2018-08-03T14:16:05.000Z',
          channelId: 'UCeHMI9HfINaDivZWhxodMeA',
          title: '【Identity/第五人格】チェイス不要！？高ランカーの芸者立ち回りと人格！【２人実況】',
          description: 'Twitter\n【＠piason_Identity】\n\n今回は芸者があまり強くない説が出ているのでサバイバーを立ち回りを紹介しました！\n\n高ランク帯では１人目をいかに素早く座らせるかが勝敗を分けます！\n\n中国版ではピエロに次ぐ使用率なのでうまく使えば間違いなく強いです！！\n\n皆さんの参考になれば嬉しいです！',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/vag-Axcm664/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/vag-Axcm664/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/vag-Axcm664/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'ピアソンのゲーム実況チャンネル',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/ilEG3RO1UeHHx2J0lDByXSSAE3s"',
         id: {
          kind: 'youtube#video',
          videoId: 'dGlk0Z0_L04'
         },
         snippet: {
          publishedAt: '2018-07-28T19:53:52.000Z',
          channelId: 'UCMJiPpN_09F0aWpQrgbc_qg',
          title: '【4人実況】史上最強の弁護士軍団の登場です【IdentityV 第五人格】',
          description: 'キヨ レトルト 牛沢 ガッチマン　Identity V 第五人格  実況\n【チャンネル登録よろっぷ】　http://goo.gl/zcqUED\n【ツイッター】　http://twitter.com/kiyo_saiore\n【インスタグラム】　http://www.instagram.com/kiyo_yuusya\n\n【単発実況再生リスト2】https://www.youtube.com/playlist?list=PLPUGXakMkjREhhudQks_MbuLmg8OhhpF_\n\n【単発実況再生リスト】https://www.youtube.com/playlist?list=PLPUGXakMkjRFuBVf-jmoHr06PUdTPD6-Q\n\n新作等はツイッターから⇒http://twitter.com/kiyo_saiore\n\n【キヨの人生あまちゃんネル】　http://ch.nicovideo.jp/kiyo-saiore?cp...\n\n【ニコニココミュ】　http://com.nicovideo.jp/community/co217323',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/dGlk0Z0_L04/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/dGlk0Z0_L04/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/dGlk0Z0_L04/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'キヨ。',
          liveBroadcastContent: 'none'
         }
        },
        {
         kind: 'youtube#searchResult',
         etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/JObjYY2OwtsdO4ChpfQuvFF5qEU"',
         id: {
          kind: 'youtube#video',
          videoId: 'hpkpNfqCUKQ'
         },
         snippet: {
          publishedAt: '2018-07-10T12:01:46.000Z',
          channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
          title: '【第五人格】初心者でも分かるリッパー対策！ 知らない人は知ってほしい！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
          description: 'ついに始動…！スマホ版デッドバイデイライト - 第五人格 - 日本語版を実況してます！【IdentityⅤ】これからが楽しみです。\n↓是非チャンネル登録宜しくお願いします！\nhttps://goo.gl/gbpTpi\n第五人格 再生リスト【 https://goo.gl/cEtcjh 】\n\n↓Twitterでも仲良くしてください∩(･ω･`;)∩\nhttps://twitter.com/satoniya_',
          thumbnails: {
           default: {
            url: 'https://i.ytimg.com/vi/hpkpNfqCUKQ/default.jpg',
            width: 120,
            height: 90
           },
           medium: {
            url: 'https://i.ytimg.com/vi/hpkpNfqCUKQ/mqdefault.jpg',
            width: 320,
            height: 180
           },
           high: {
            url: 'https://i.ytimg.com/vi/hpkpNfqCUKQ/hqdefault.jpg',
            width: 480,
            height: 360
           }
          },
          channelTitle: 'さとみ',
          liveBroadcastContent: 'none'
         }
        }
       ]
    @Prop({ type: Array,  required: true }) private data!: object[]
    @Prop({ type: Function }) private click!: void

}
