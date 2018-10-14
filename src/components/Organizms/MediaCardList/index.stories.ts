/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue"
import { action } from "@storybook/addon-actions"
import VueInfoAddon from "storybook-addon-vue-info"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withNotes } from "@storybook/addon-notes"

// StoryComponent
import MediaCardList from "@/components/Organizms/MediaCardList"

// 基本情報
const data = [
  {
    kind: "youtube#searchResult",
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bhwGd26yC0U6Oqk8GXZGc7QWFb0"',
    id: {
      kind: "youtube#video",
      videoId: "X6HGoCQNyD0"
    },
    snippet: {
      publishedAt: "2018-08-31T15:04:31.000Z",
      channelId: 'UCRuLqjHqpqpcLY6Xg8tWYZg',
      title: '“第五人格”游戏攻略，心跳与勇气的对决！',
      description:
        '第五人格很不错的游戏，我自己算是一个老手了，可是对于很多小伙伴来说，估计还没有接触过这款游戏，想因此今天我给大家重点的说一下这个游...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/X6HGoCQNyD0/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/X6HGoCQNyD0/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/X6HGoCQNyD0/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Duxx1',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/1BOw9mouEYlqbc4R5P2OnBblVjs"',
    id: {
      kind: 'youtube#video',
      videoId: 'hsTvCF4a8Oc'
    },
    snippet: {
      publishedAt: '2018-08-31T15:00:34.000Z',
      channelId: 'UC-khDVPIEg3lG_6E_3iPr2A',
      title: '第五人格   2（阿建）',
      description:
        '這次和影子和我弟一起玩第五人格也換了新的片尾雖然我沒做的很好啦～   這次四個機械師！ 看看能不能贏喜歡我的影片要記得按個大大的喜歡...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hsTvCF4a8Oc/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hsTvCF4a8Oc/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/hsTvCF4a8Oc/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '阿建TV',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/2HFWxpXwJInb1CSv6KxIAjjo5E8"',
    id: {
      kind: 'youtube#video',
      videoId: '5rpATRouwl8'
    },
    snippet: {
      publishedAt: '2018-08-31T14:54:32.000Z',
      channelId: 'UCBtBcVCnOeGnL8qdfOjUzeA',
      title:
        '【第五人格】ランク戦！22:00から世界ランカーと一緒にランダムマッチ※参加型はやりません【IdentityV】【アイデンティティファイブ】',
      description:
        'Support the stream: https://streamlabs.com/shtgiga 本日のおすすめ動画↓ 最強ハンターランキング https://youtu.be/8ryohhsXVx0 禁止事項 １．煽り暴言等の不愉快な.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/5rpATRouwl8/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/5rpATRouwl8/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/5rpATRouwl8/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'sht GIGA',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/wTuFR1TNOWGjqMlqDT4D3XiQV4I"',
    id: {
      kind: 'youtube#video',
      videoId: '5XSYp1vu4nY'
    },
    snippet: {
      publishedAt: '2018-08-31T14:42:14.000Z',
      channelId: 'UC7GX4H4YpdEfyjMtTu1_U0A',
      title: '第五人格 第一次拍',
      description: '我很爛XD.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/5XSYp1vu4nY/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/5XSYp1vu4nY/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/5XSYp1vu4nY/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '普通人',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/AZfbkGXyMLDLdlzZ8lvG93yV-j4"',
    id: {
      kind: 'youtube#video',
      videoId: 'fZYIIe0TbMs'
    },
    snippet: {
      publishedAt: '2018-08-31T14:35:46.000Z',
      channelId: 'UCHRm4OKOIdjdkQOmqjiMCJw',
      title: '第一次用祭司玩[第五人格](請多多包涵！！)｡ﾟ(ﾟ*´▽`ﾟ*)ﾟ｡',
      description: '喜歡的話我會拍下一輯第五人格。',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/fZYIIe0TbMs/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/fZYIIe0TbMs/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/fZYIIe0TbMs/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '亞夢飛非CandyAngela',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/zbtUi_YWQhthYfcIz8y82TChwsU"',
    id: {
      kind: 'youtube#video',
      videoId: 'eJmVCj0VyJc'
    },
    snippet: {
      publishedAt: '2018-08-31T14:31:49.000Z',
      channelId: 'UCP89FZx1BOZFPAZ8gydF0PA',
      title: '【第五人格】播兩場第5人格！',
      description:
        '這是我使用DU Recorder 錄製的影片。很容易就能錄製您的螢幕畫面並進行直播串流。下載連結： Android: https://goo.gl/s9D6Mf iOS: https://goo.gl/nXnxyN ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/eJmVCj0VyJc/default_live.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/eJmVCj0VyJc/mqdefault_live.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/eJmVCj0VyJc/hqdefault_live.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '123政政政',
      liveBroadcastContent: 'live'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Ks3wz2fOvX5rGZQxZdCFf1KzRB8"',
    id: {
      kind: 'youtube#video',
      videoId: 'exbMYO1_15k'
    },
    snippet: {
      publishedAt: '2018-08-31T14:28:22.000Z',
      channelId: 'UC02zhezVl_euywZeN5M6AOA',
      title: '【視聴者様参加型】【Identity5】【第5人格】PCで実況プレイ！part36',
      description:
        'ご視聴ありがとうございます！ 第5人格の生配信をしています！ ご視聴いただいている視聴者様からの参加もお待ちしております！ 参加したい方...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/exbMYO1_15k/default_live.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/exbMYO1_15k/mqdefault_live.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/exbMYO1_15k/hqdefault_live.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '無頼男',
      liveBroadcastContent: 'live'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/EwxkDMqnEVW4d-E013ZKt_L9sXw"',
    id: {
      kind: 'youtube#video',
      videoId: 'h9JxNkheHRE'
    },
    snippet: {
      publishedAt: '2018-08-31T14:28:30.000Z',
      channelId: 'UCR4H33La4BdesMOMU3fuH2A',
      title: '第五人格ランクマ放送→雑談',
      description:
        'ゴースティング（カンニング）を疑うコメントをした人はブロックします。 誕生日祝ってとのコメントが多く困っています。基本スルーします...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/h9JxNkheHRE/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/h9JxNkheHRE/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/h9JxNkheHRE/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'kakiゲーム',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/zvVYEaob6y93nHocmgOXIxMG4Gg"',
    id: {
      kind: 'youtube#video',
      videoId: 'P4Uv7ps0Ejw'
    },
    snippet: {
      publishedAt: '2018-08-31T14:23:09.000Z',
      channelId: 'UCHDf9JEU0vTeVCHYc3AzzhQ',
      title: '【第五人格】還喜歡葛格的觸手嗎?',
      description:
        'Support the stream: https://streamlabs.com/channelmin\'s 免註冊贊助https://goo.gl/wVRJTg 歐付寶贊助https://goo.gl/1maLfx 粉絲團https://goo.gl/RB2fc7 出現以下 ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/P4Uv7ps0Ejw/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/P4Uv7ps0Ejw/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/P4Uv7ps0Ejw/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Min',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/XE1GNoBuKU9F63nBwBKFaqFq90M"',
    id: {
      kind: 'youtube#video',
      videoId: '_rh27kbalCQ'
    },
    snippet: {
      publishedAt: '2018-08-31T14:15:59.000Z',
      channelId: 'UCiDDbbPWf1--ZfiFNUWHaPA',
      title: '第五人格 买了新皮肤，不料被“章鱼哥”盯住',
      description:
        '喜欢的伙伴可以订阅一波。 视频源自：http://www.365yg.com/c/user/50097019277/ 【汤米Teacher】 —v—訂閱本頻道分享更多堡壘之夜（Fornite）、第五人格(identit...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/_rh27kbalCQ/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/_rh27kbalCQ/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/_rh27kbalCQ/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'THF',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/aln899yQ0Zv68ErN1i9_zeRfKBQ"',
    id: {
      kind: 'youtube#video',
      videoId: 'DDvqmamQtsk'
    },
    snippet: {
      publishedAt: '2018-08-31T14:13:58.000Z',
      channelId: 'UCOIEVwhgAQ-V3rLJ-8Sg9jQ',
      title: '第五人格',
      description: 'Bug..',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/DDvqmamQtsk/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/DDvqmamQtsk/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/DDvqmamQtsk/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Hi S',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/peEdUIhoDQpck-pU5jAp6eulVNM"',
    id: {
      kind: 'youtube#video',
      videoId: 'FI9fLkqpyA8'
    },
    snippet: {
      publishedAt: '2018-08-31T14:03:42.000Z',
      channelId: 'UCniHkxjqYfWEpMi3DGIK1dg',
      title: '一起來玩第五人格吧！',
      description:
        '快來看我直播第五人格！ 追蹤我了解更多： https://arcade.omlet.me/profile/ay20010506 #OmletArcade #第五人格#Bestof2017 #年度最佳app 快下載年度最 ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/FI9fLkqpyA8/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/FI9fLkqpyA8/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/FI9fLkqpyA8/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '幻風暴魂',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Izs77Bg9Z-4M0Vysz-Y2Qgmqtpk"',
    id: {
      kind: 'youtube#video',
      videoId: 'hOR3eGgI3XM'
    },
    snippet: {
      publishedAt: '2018-08-31T13:54:02.000Z',
      channelId: 'UCKKKAJGM9vdVraI2Zez24mw',
      title: '視聴者参加型！第五人格一緒にやりましょう！-Identity V',
      description:
        '動画撮りながらやっている場合はコメント返信遅れますのでご了承ください。(｢・ω・)｢ 第五人格:POOH3 質問募集→https://www.youtube.com/watch?v=VVQ773hiQ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hOR3eGgI3XM/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hOR3eGgI3XM/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/hOR3eGgI3XM/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'POOH CHANNEL',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/f1z-2BYkFUAU6nZ641V0mJjRr4E"',
    id: {
      kind: 'youtube#video',
      videoId: 'dN-s3wUM_Jc'
    },
    snippet: {
      publishedAt: '2018-08-31T13:50:46.000Z',
      channelId: 'UCMjza4d0jaGERhafLtuN82g',
      title: '君たち　第五人格【Identity】をやらないかい？参加型',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/dN-s3wUM_Jc/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/dN-s3wUM_Jc/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/dN-s3wUM_Jc/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'SUZUKI SHO 【れんぽ】',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/y8rbI-s0_BCMpX9XXxwoJ0fkwt8"',
    id: {
      kind: 'youtube#video',
      videoId: 'cmQngalzXT0'
    },
    snippet: {
      publishedAt: '2018-08-31T13:42:47.000Z',
      channelId: 'UCzJrczib7tDWUTZLDHnldsQ',
      title:
        '【第五人格】歌手使ってチェイスしてみたらwww実況動画【IdentityⅤ】【アイデンティティファイブ】ダブルハンター予行練習',
      description:
        '今回の第五人格動画はダブルハンターモードを宿傘の魂(黒白無常)とタコでやろうと思ったらまさかの使用できず！リッパーとタコを使ってみまし...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/cmQngalzXT0/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/cmQngalzXT0/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/cmQngalzXT0/hqdefault.jpg',
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
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/8_lM5f0M_V3SOskKl9BX4XtXQNs"',
    id: {
      kind: 'youtube#video',
      videoId: 'O2TXLUMfCYE'
    },
    snippet: {
      publishedAt: '2018-08-31T13:44:22.000Z',
      channelId: 'UCvewiujKsF5zyLaAw6h-8ng',
      title: '【花君】第五人格#2',
      description: '快來看我玩「第五人格」！',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/O2TXLUMfCYE/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/O2TXLUMfCYE/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/O2TXLUMfCYE/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '花輪',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/vBKI-8s4TPU85W2yPsqRAMWqTMY"',
    id: {
      kind: 'youtube#video',
      videoId: 'OQqq1tw_8As'
    },
    snippet: {
      publishedAt: '2018-08-31T13:39:29.000Z',
      channelId: 'UC3DghPgkXopgQf1WS65oZqw',
      title: '第五人格 紅蝶x湖景村=惡夢組合',
      description: '小伙伴們最驚咩監管者？我最驚紅蝶.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/OQqq1tw_8As/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/OQqq1tw_8As/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/OQqq1tw_8As/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '鄰家 寶寶',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/K7JqjaUDdR9CeWlY8XQrGggMm4g"',
    id: {
      kind: 'youtube#video',
      videoId: 'XiRul3Lfhm4'
    },
    snippet: {
      publishedAt: '2018-08-31T13:35:35.000Z',
      channelId: 'UCqg-MiNhjCo342gl1YhRjog',
      title:
        '【第五人格】めちゃくそ下手だけど調香師縛りで参加型Live！気軽にどうぞん！ID:575041【生放送】',
      description:
        '進行中の企画=== 1. 8月中にチャンネル登録者 500人突破で、全クリするまでホラーゲームをはるかみが永遠放送 2. リスナーさんから頂いた絵をサ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/XiRul3Lfhm4/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/XiRul3Lfhm4/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/XiRul3Lfhm4/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'はるかみロック',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/jJd8TIODif8ZO0ZBBFVDuV97-fw"',
    id: {
      kind: 'youtube#video',
      videoId: 'Gp6HhCua_MY'
    },
    snippet: {
      publishedAt: '2018-08-31T13:19:16.000Z',
      channelId: 'UCRqgsjV98wCHDRCedkDhaDQ',
      title:
        '第五人格:六階排位賽&21:10 烤箱大逃亡:最新雙人模式 搭檔:正妹團米小琪',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Gp6HhCua_MY/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Gp6HhCua_MY/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/Gp6HhCua_MY/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '耶比世文',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/9ECectS35Zp1ISg9B2dJUEnmS9k"',
    id: {
      kind: 'youtube#video',
      videoId: 'bNLnscDkcTU'
    },
    snippet: {
      publishedAt: '2018-08-31T13:20:11.000Z',
      channelId: 'UCXIjjmRhIVXaddqZcqXpviw',
      title: '第五人格 Identity V 開台中！@HK',
      description:
        '主空軍 盲女 追蹤我了解更多： https://arcade.omlet.me/profile/finenson #OmletArcade #第五人格.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bNLnscDkcTU/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bNLnscDkcTU/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/bNLnscDkcTU/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Kiri_ Hortensia',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/oUbrVQFHTFDxGahObG--8d7eozU"',
    id: {
      kind: 'youtube#video',
      videoId: 'UX6-V2boqhs'
    },
    snippet: {
      publishedAt: '2018-08-31T13:18:07.000Z',
      channelId: 'UChCvcAN0OSkG7ihw5GcxWGA',
      title: '[第五人格]用線索兌換紅蝶，用紅蝶試打排位',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/UX6-V2boqhs/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/UX6-V2boqhs/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/UX6-V2boqhs/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '黃昊翔丶',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/d9vq0JOt46IRDAqnz84Que7yBt4"',
    id: {
      kind: 'youtube#video',
      videoId: '2Cm3d80nE4Y'
    },
    snippet: {
      publishedAt: '2018-08-31T13:14:25.000Z',
      channelId: 'UCHY4wZQM5JyCnOvK-sdp01w',
      title: '第五人格（宿伞之魂，黑白无常）',
      description: '速度真的很慢，不好控制。',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/2Cm3d80nE4Y/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/2Cm3d80nE4Y/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/2Cm3d80nE4Y/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '谷浩雨',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/TU93H6Mt1aZWjYPFwdTGvhAXHh0"',
    id: {
      kind: 'youtube#video',
      videoId: '7slVwCwUEOU'
    },
    snippet: {
      publishedAt: '2018-08-31T12:59:05.000Z',
      channelId: 'UCXYUvtFY3pWgbp4WfqsHpgA',
      title:
        '【第五人格】ピエロが上手くなりたい！ランクマ8月31日20時【Identity V】',
      description:
        'おはようございます、樋宮（ひのみや）なつきです。 雑談・質問など、コメントはお気軽にどうぞ！ 気に入りましたら、高評価・チャンネル登録...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/7slVwCwUEOU/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/7slVwCwUEOU/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/7slVwCwUEOU/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '樋宮なつき',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/kxCOqV0ddtX9khhFJMpIfvWczHg"',
    id: {
      kind: 'youtube#video',
      videoId: 'wRWanirMhZM'
    },
    snippet: {
      publishedAt: '2018-08-31T12:43:05.000Z',
      channelId: 'UCpYjPQ1vMtLCaKcx_XWV4yg',
      title:
        '【第五人格】カスタム対戦誰でも参加型！気楽に配信！平成最後の夏配信！【Identity V】延長はチャンネル登録増えるごとに',
      description:
        'Support the stream: https://streamlabs.com/dep1 参加はYouTubeチャット欄にて受け付けます 1戦毎に参加希望募ります（私のコメントの後の方のみ受付。連投し...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/wRWanirMhZM/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/wRWanirMhZM/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/wRWanirMhZM/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'NekoInu ch猫犬 /',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/TKnwLsNQNcU1zuCz-AKbLqx4Tyw"',
    id: {
      kind: 'youtube#video',
      videoId: 'l2Km8HB2a58'
    },
    snippet: {
      publishedAt: '2018-08-31T12:31:08.000Z',
      channelId: 'UC0ppHLRB01LKsXoQNEI4qtQ',
      title:
        '【第五人格】一緒に第五人格やりませんか？初心者初見さん歓迎！【identityV】',
      description:
        'id; 226096 【Shiroaの生放送ちゃんねる】 https://www.youtube.com/user/SHIROATV2 【Shiroa.LINEスタンプ発売中！】 http://line.me/R/shop/detail/1283675 【Shiroa.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/l2Km8HB2a58/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/l2Km8HB2a58/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/l2Km8HB2a58/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'SRGAME',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/tld4Bg0TXhJAdl3ltOkpNxDemx0"',
    id: {
      kind: 'youtube#video',
      videoId: 'QTKSvc6DHpE'
    },
    snippet: {
      publishedAt: '2018-08-31T12:23:51.000Z',
      channelId: 'UCqA8ybiBZibM51jIVU1_ohA',
      title: '第五人格：走步王的日常',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/QTKSvc6DHpE/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/QTKSvc6DHpE/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/QTKSvc6DHpE/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '諾牙踏斯',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/gSq0HDycBTBVOwHZUNLz0_ixXQs"',
    id: {
      kind: 'youtube#video',
      videoId: 'T35m2FeoLiA'
    },
    snippet: {
      publishedAt: '2018-08-31T12:00:04.000Z',
      channelId: 'UCtEi6Pker29_kjkexx7WIBQ',
      title:
        '【第五人格】調香師実装！S1ガチャをまとめてドーンと80連！【調香師】【真髄6】【ガチャ】',
      description:
        'ついに終わりを迎えるシーズン１。今回はその総決算として、貯めに貯めたガチャ全部回しちゃいます！調香師、そして良いモーションが欲しい...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/T35m2FeoLiA/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/T35m2FeoLiA/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/T35m2FeoLiA/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'まごチャンネル - まごいちのゲーム実況!',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/pM8QAB0IlRwHBbD9F_NwaR474QE"',
    id: {
      kind: 'youtube#video',
      videoId: 'ylUPzm843Pc'
    },
    snippet: {
      publishedAt: '2018-08-31T12:00:10.000Z',
      channelId: 'UChn3M6DwZ-49_Pm_s_qEODQ',
      title:
        '【恩麻實況】第五人格-祭司教學  四祭司一起躲地下室????第一次玩祭司就上癮，無限穿越 - 恩恩老師',
      description:
        '第五人格▻ https://goo.gl/Q3rn4p · 每週二、三、五、六晚上更新影片· 感謝大家的支持，恩恩愛你呦(*´・З・`) ❤ 追蹤恩恩日常▻ Facebook https://g...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/ylUPzm843Pc/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/ylUPzm843Pc/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/ylUPzm843Pc/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '恩恩老師(Ean TV)',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/7_QqV4GLa4cAKR_ZPWvAJQduyFk"',
    id: {
      kind: 'youtube#video',
      videoId: 'aTk6Zg5kNDQ'
    },
    snippet: {
      publishedAt: '2018-08-31T12:00:02.000Z',
      channelId: 'UCl-9HNMqaWRNafG_zUUlWAw',
      title: '【第五人格】第五人格始めましたw',
      description:
        '久々の動画投稿なのでとりあえずまったりプレーという事でw これから色々と投稿していきますのでよろしくw.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/aTk6Zg5kNDQ/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/aTk6Zg5kNDQ/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/aTk6Zg5kNDQ/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Shere Once Games',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/JjnvU4Ae4lhN6BvDKKvrDE_Uo48"',
    id: {
      kind: 'youtube#video',
      videoId: '2hWFmTB3_xc'
    },
    snippet: {
      publishedAt: '2018-08-31T12:01:38.000Z',
      channelId: 'UC6OSsHLNg5a3oU9QcK94JMQ',
      title:
        '【第五人格】参加型生配信 タコ対策を考えていく  初見さん大歓迎【 IdentityⅤ】',
      description:
        '【参加型第五人格】 〜参加申請の流れ〜 ①YouTubeチャット欄で第五人格でのアカウント名を書き込んで下さい (例:参加希望です！第五人格の名...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/2hWFmTB3_xc/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/2hWFmTB3_xc/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/2hWFmTB3_xc/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '爆天ゲームズ',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/kVhp0Mu3M9U-hFH9dG2h2ArKOFI"',
    id: {
      kind: 'youtube#video',
      videoId: 'vsp2CHX8nQU'
    },
    snippet: {
      publishedAt: '2018-08-31T11:53:46.000Z',
      channelId: 'UCUkpkZOy4FXEmudHmd4Xvcw',
      title: '【第五人格短漫】神与神的信徒5',
      description:
        '一切恐惧，源于未知！ 亲眼所见，亦非真实！ 期望每一次点击观看的观众们，能够点击下订阅。 这样的话我们才会有更多的动力去更新精彩的视频。',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/vsp2CHX8nQU/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/vsp2CHX8nQU/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/vsp2CHX8nQU/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '第5情报站',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Kr27pHXOs0Ui_iDHQGyCDlpkJiQ"',
    id: {
      kind: 'youtube#video',
      videoId: 'PAPeyPTbLVI'
    },
    snippet: {
      publishedAt: '2018-08-31T11:53:46.000Z',
      channelId: 'UCUkpkZOy4FXEmudHmd4Xvcw',
      title: '【第五人格短漫】庄园小故事5：论大众的日常',
      description:
        '一切恐惧，源于未知！ 亲眼所见，亦非真实！ 期望每一次点击观看的观众们，能够点击下订阅。 这样的话我们才会有更多的动力去更新精彩的视频。',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/PAPeyPTbLVI/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/PAPeyPTbLVI/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/PAPeyPTbLVI/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '第5情报站',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/RNwKKUGLJZTmNVCOUKdM9y65NTU"',
    id: {
      kind: 'youtube#video',
      videoId: 'FhlqTquEeiQ'
    },
    snippet: {
      publishedAt: '2018-08-31T11:55:25.000Z',
      channelId: 'UCmE8sLhT9d2XScGkwojX30Q',
      title: '第五人格の生放送',
      description:
        '(第五人格 Identity V IdentityV)スマホ版Dead by Daylight実況！ スナザメです。チャンネル登録・twitter登録お願いします！ 【チャンネル登録】 https://goo.gl...',
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
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/SOrnn81ggYfOTfNpbxqCinXkbas"',
    id: {
      kind: 'youtube#video',
      videoId: '8C6l0ykazSM'
    },
    snippet: {
      publishedAt: '2018-08-31T11:13:47.000Z',
      channelId: 'UCfUk2xQPrhWIsE4m9Sq9qmw',
      title:
        '【第五人格】ランクマッチで使える復讐者の内在人格！！ヘラジカもマンモスも敵じゃない！？【identity V】【アイデンティティファイブ】【2人実況】',
      description:
        '高評価、チャンネル登録お願いします！ ↓ https://www.youtube.com/channel/UCfUk2xQPrhWIsE4m9Sq9qmw?sub_confirmation=1 【おすすめ動画】 【第五人格】 ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/8C6l0ykazSM/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/8C6l0ykazSM/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/8C6l0ykazSM/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'コンとココナッツのゲームチャンネル',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/3yQTt9koKECzfXsEQf6iskBFCxM"',
    id: {
      kind: 'youtube#video',
      videoId: 'GmWwlpI1N0o'
    },
    snippet: {
      publishedAt: '2018-08-31T11:09:40.000Z',
      channelId: 'UCPL_DmYpyBmXT2RyZKIughw',
      title: '第五人格でやさ鬼に出会ったwww',
      description:
        'こんにちは黒姫ですでも投稿したのの夜（笑）今回も第五人格やってたのですが♪ある日ー森の中やさ鬼に出ああった花咲かない森の道ーリッパ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/GmWwlpI1N0o/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/GmWwlpI1N0o/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/GmWwlpI1N0o/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '姉妹ちゃんねる',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/rRj4KaLKryGU9u7sIDl-p8eD__4"',
    id: {
      kind: 'youtube#video',
      videoId: 'lLHek5A2J5Q'
    },
    snippet: {
      publishedAt: '2018-08-31T10:49:01.000Z',
      channelId: 'UCmRByJKfJOPIyd4GGW7D8Mw',
      title:
        '【第五人格 手元配信】ハンター&サバイバーの人格100にするまで寝られない生放送！※黒白無常/カウボーイ先行プレイします！【Identity V 実況】',
      description:
        '動画概要欄も確認してね❗❗ エウレカの救援物資▷http://amzn.asia/cWCulMg Twitter▷https://twitter.com/Tiri_Tiri_Hair ～生放送をより良いものにするために...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/lLHek5A2J5Q/default_live.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/lLHek5A2J5Q/mqdefault_live.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/lLHek5A2J5Q/hqdefault_live.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'エウレカ/ 第五人格',
      liveBroadcastContent: 'live'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Lzg0vs7ijEOlW-LkZr3m59Hu4Zk"',
    id: {
      kind: 'youtube#video',
      videoId: 'YOaoqXDCdYk'
    },
    snippet: {
      publishedAt: '2018-08-31T10:37:52.000Z',
      channelId: 'UCMIf0lFsh_US3VWCClK7IcQ',
      title: '秀康直播~2V8雙監管者模式【第五人格(Identity V)】#118',
      description:
        '每天晚上7點開台歐~不定期上傳剪輯影片σ ﾟ∀ ﾟ) ﾟ∀ﾟ)σ Youtube頻道訂閱：https://goo.gl/tknfEq σ ﾟ∀ ﾟ) ﾟ∀ﾟ)σYoutube新頻道訂閱：https://goo.gl/zyB...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/YOaoqXDCdYk/default_live.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/YOaoqXDCdYk/mqdefault_live.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/YOaoqXDCdYk/hqdefault_live.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '秀康Showcome',
      liveBroadcastContent: 'live'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/0D-aRUcBEIY_F2RnUILFy7VIRm0"',
    id: {
      kind: 'youtube#video',
      videoId: '2OlN9ALwgF8'
    },
    snippet: {
      publishedAt: '2018-08-31T10:29:14.000Z',
      channelId: 'UCWwdUe8gu1QdxJrQ1Gi5s5A',
      title: '我的「第五人格」直播影片',
      description: '快來看我玩「第五人格」！',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/2OlN9ALwgF8/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/2OlN9ALwgF8/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/2OlN9ALwgF8/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '吳秉宇',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/ShQg4Mak_YugjqgP6-PFXOAbaT0"',
    id: {
      kind: 'youtube#video',
      videoId: 'O29MuOnAS6k'
    },
    snippet: {
      publishedAt: '2018-08-31T10:29:25.000Z',
      channelId: 'UCQNdhK5poFfCxuDJFUOGQUQ',
      title: '【第五人格】新地图月亮河公园游戏内效果展示 共研服',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/O29MuOnAS6k/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/O29MuOnAS6k/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/O29MuOnAS6k/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Game Life第五人格',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/J7449gasZGXYN8Ilx_FLUnee85o"',
    id: {
      kind: 'youtube#video',
      videoId: 'Vpee-y-BCxg'
    },
    snippet: {
      publishedAt: '2018-08-31T10:02:51.000Z',
      channelId: 'UCmRByJKfJOPIyd4GGW7D8Mw',
      title:
        '【第五人格】瞬間移動し放題！『宿傘之魂/黒白無常』を先行プレイ！【Identity V 実況】',
      description:
        '動画概要欄も確認してね❗❗ エウレカの救援物資▷http://amzn.asia/cWCulMg Twitter▷https://twitter.com/Tiri_Tiri_Hair ～生放送をより良いものにするために...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Vpee-y-BCxg/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Vpee-y-BCxg/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/Vpee-y-BCxg/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'エウレカ/ 第五人格',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/bLe5_XFHeeNT-uWe5tBS3HjekFU"',
    id: {
      kind: 'youtube#video',
      videoId: 'BoWlxRGLkBs'
    },
    snippet: {
      publishedAt: '2018-08-31T10:02:37.000Z',
      channelId: 'UC0nDjH1yo1gRvO29UhJGOfA',
      title: '【第五人格】2对8模式 地窖大逃亡 刺激(・ω・)ノ',
      description: '',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/BoWlxRGLkBs/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/BoWlxRGLkBs/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/BoWlxRGLkBs/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '阿拉雷',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/5sG9zvTnBj1KPNzK4pA6y80oGB8"',
    id: {
      kind: 'youtube#video',
      videoId: '0H-99kBCP6U'
    },
    snippet: {
      publishedAt: '2018-08-31T10:00:00.000Z',
      channelId: 'UCkvGqeY1Bo1dRhTlERLekKA',
      title:
        '【第五人格】友達を見捨てる！？友情確認ゲーム！！！【IdentityV】『アイデンティティV』',
      description:
        '19BOX (ジュークボックス) アイデンティティ実況第二弾！ このゲームおんもしれぇ！！！ 最近ハマってるんだけど全然上手くならない！笑 チャン...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/0H-99kBCP6U/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/0H-99kBCP6U/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/0H-99kBCP6U/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '19BOX',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/00lTqy1fn5-6eDYGl7G2iBjPLaQ"',
    id: {
      kind: 'youtube#video',
      videoId: 'zidBxYKfcrY'
    },
    snippet: {
      publishedAt: '2018-08-31T10:00:11.000Z',
      channelId: 'UCEr6wJw2oysA2GN0cKl23Gw',
      title:
        '【第五人格】新サバイバー「調教師」は猿を使ってハンターを妨害！？カラスにバレずに移動できる！！【IdentityV】',
      description:
        '第五人格 新サバイバー調教師の動画です 女好きのカウボーイが喜びそうなキャラですね ▽第五人格のその他の動画はこちらから▽ https://www.yout...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/zidBxYKfcrY/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/zidBxYKfcrY/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/zidBxYKfcrY/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'うめ〜やGames',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Dno05qjiSfqjiRUjQeX0m5XAlIw"',
    id: {
      kind: 'youtube#video',
      videoId: '-dehDXrvkII'
    },
    snippet: {
      publishedAt: '2018-08-31T10:00:01.000Z',
      channelId: 'UCmRByJKfJOPIyd4GGW7D8Mw',
      title:
        '【第五人格】常に瞬間移動が出来る！『宿傘之魂/黒白無常』の能力解説！【Identity V 実況】',
      description:
        '動画概要欄も確認してね❗❗ エウレカの救援物資▷http://amzn.asia/cWCulMg Twitter▷https://twitter.com/Tiri_Tiri_Hair ～生放送をより良いものにするために...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/-dehDXrvkII/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/-dehDXrvkII/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/-dehDXrvkII/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'エウレカ/ 第五人格',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/pQRN0M3Z9EgzFkOjnvwDNAaly3E"',
    id: {
      kind: 'youtube#video',
      videoId: 'H9s2uDzMseM'
    },
    snippet: {
      publishedAt: '2018-08-31T09:56:51.000Z',
      channelId: 'UCbp604mm-aU7SGnUmZBH8XA',
      title: '第5人格  医師で仲間をめっちゃ救助したw',
      description: '初投稿です。第5人格のプレイから。',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/H9s2uDzMseM/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/H9s2uDzMseM/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/H9s2uDzMseM/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '。しゃどーTV',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/eGo2ZQpz91s5oPWihouMHEyEvTM"',
    id: {
      kind: 'youtube#video',
      videoId: 'Hvdn8RhQHIg'
    },
    snippet: {
      publishedAt: '2018-08-31T09:40:42.000Z',
      channelId: 'UCx05ga8aAxdmUvb8AV_AWRA',
      title:
        '【第五人格】4段以上の内在人格について雑談！ランクマ機械技師VSタコで5台分チェイス！生配信ハイライト【identityⅤ】',
      description:
        'マーサ教官の救助講座 #基本 https://youtu.be/uCXC8eqJ1qU ピアソン先生のチェイス講座 #1基本 https://youtu.be/E2U-m0Z3TKc #2板の使い方 ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/Hvdn8RhQHIg/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/Hvdn8RhQHIg/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/Hvdn8RhQHIg/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: '玉TV',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/xRV3AI1-IfmLbFM0nvHaA-k1JrU"',
    id: {
      kind: 'youtube#video',
      videoId: 'n1y54hObnBM'
    },
    snippet: {
      publishedAt: '2018-08-31T09:39:25.000Z',
      channelId: 'UC-1uvY3U4sMSGi52IcT_fWQ',
      title:
        '【第五人格】過去を書き換えろ！調香師が強すぎる…！【IdentityⅤ】【アイデンティティファイブ】【日本語版】【実況】',
      description:
        'やっぱり調香師かわいいペロ チャンネル登録お願いします！↓ https://www.youtube.com/channel/UC-1uvY3U4sMSGi52IcT_fWQ?sub_confirmation=1 第五人格 再生 ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/n1y54hObnBM/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/n1y54hObnBM/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/n1y54hObnBM/hqdefault.jpg',
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
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/dBt5AIL8Vv-XtPmRu81utDRGpfU"',
    id: {
      kind: 'youtube#video',
      videoId: 'V96IBU6pmLQ'
    },
    snippet: {
      publishedAt: '2018-08-31T09:30:02.000Z',
      channelId: 'UCk-CphGNkWFFN9TrnFtP0wA',
      title:
        '《哲平》手機遊戲 第五人格 - 調香師!! 從零開始!? ( 損血救人破議 通通回復原狀!! )',
      description:
        '第五人格#調香師新的逃脫者來啦! 滿多人不推薦我們的調香師的不過如果香水用的好的話絕對能在關鍵時刻做大事呢! 訂閱哲平，關注更多最新...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/V96IBU6pmLQ/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/V96IBU6pmLQ/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/V96IBU6pmLQ/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'kuroko哲平',
      liveBroadcastContent: 'none'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/v7ROtnYOwmAyeYvSbbk_Y6_Ke08"',
    id: {
      kind: 'youtube#video',
      videoId: 'WJP45cKXEHQ'
    },
    snippet: {
      publishedAt: '2018-08-31T09:20:59.000Z',
      channelId: 'UCzqoAFObkB3Ptp92Jqg7CWQ',
      title:
        '【第５人格-アイデンティティＶ-】ダブルハンターモード『黄衣の王(タコ)＆リッパーコンビ！』最強の２人が手を組んだ！【攻略実況：43】| スマホ版 DBD Identity V',
      description:
        '前の動画：黒白無常(宿傘の魂)解禁！スキル判明 https://www.youtube.com/watch?v=cyA2OK5sDKw アイデンティティＶ 攻略実況リスト ...',
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
    etag: '"XI7nbFXulYBIpL0ayR_gDh3eu1k/Ux_U7kdDVHhtWq5y9U6afziX3JE"',
    id: {
      kind: 'youtube#video',
      videoId: '4lpJ1JHgS14'
    },
    snippet: {
      publishedAt: '2018-08-31T09:06:08.000Z',
      channelId: 'UCyEf6IlgRGx6-zbTEP80jYg',
      title:
        '【第五人格】ガチャで調香師GET！何連かかった？！「アイデンティティⅤ（IdentityⅤ）」',
      description:
        'スマホ アプリ ソシャゲ 実況 Belle ベル デッドバイデイライト dead by daylight アイデンティティ ☆生放送等の情報はTwitterで！ https://twitter.com/Belle...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/4lpJ1JHgS14/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/4lpJ1JHgS14/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/4lpJ1JHgS14/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Belle',
      liveBroadcastContent: 'none'
    }
  }
]

storiesOf('Organizms/MediaCardList', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    '基本情報',
    withNotes(
      `
      sample text
    `
    )(() => {
      return {
        components: { MediaCardList },
        template: `<MediaCardList :data="${data}" titleKey/>`,
        propsDescription: {
          height: '画像の縦幅'
        }
      }
    })
  )

// Example
storiesOf('Organizms/MediaCardList', module).add('Normal', () => ({
  components: { MediaCardList },
  template:
    '<MediaCardList url="https://jungle-time.com/wp-content/uploads/2018/03/red-fox-2230730_1280.jpg" alt="Fox Image" width="400" height="240" />',
  methods: { action: action('clicked') }
}))
