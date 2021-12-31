const weapon_items = ["大剣", "太刀", "片手剣", "双剣", "ハンマー", "狩猟笛", "ランス", "ガンランス", "スラッシュアックス", "操虫棍", "チャージアックス", "ライトボウガン", "へビィボウガン", "弓"];
const monster_list = ["アオアシラ","アケノシルム","アンジャナフ","イソネミクニ","ウルクスス","オサイズチ","オロミドロ",
                    "クルルヤック","ゴシャハギ","ジュラトドス","ジンオウガ","タマミツネ","ディアブロス","ティガレックス",
                    "ドスバギィ","ドスフロギィ","トビカガチ","ナルガクルガ","バサルモス","バゼルギウス","ビシュテンゴ",
                    "プケプケ","フルフル","ベリオロス","ボルボロス","マガイマガド","ヤツカダキ","ヨツミワドウ","ラージャン",
                    "ラングロトラ","リオレイア","リオレウス","ロアルドロス","イブシマキヒコ","オオナズチ","クシャルダオラ",
                    "テオテスカトル","ナルハタタヒメ","バルファルク","ヌシ・アオアシラ","ヌシ・ディアブロス","ヌシ・ジンオウガ",
                    "ヌシ・タマミツネ","ヌシ・リオレイア","ヌシ・リオレウス"];

let timer_1P, timer_2P, timer_3P, timer_4P, timer_monster;

var SelectStart_1P = () => timer_1P = setInterval(
    ()=> weapon_1P.textContent = weapon_items[Math.floor( Math.random() * weapon_items.length )],
    200,
);

var SelectStart_2P = () => timer_2P = setInterval(
    ()=> weapon_2P.textContent = weapon_items[Math.floor( Math.random() * weapon_items.length )],
    200,
);

var SelectStart_3P = () => timer_3P = setInterval(
    ()=> weapon_3P.textContent = weapon_items[Math.floor( Math.random() * weapon_items.length )],
    200,
);

var SelectStart_4P = () => timer_4P = setInterval(
    ()=> weapon_4P.textContent = weapon_items[Math.floor( Math.random() * weapon_items.length )],
    200,
);

var SelectStart_Monster = () => timer_monster = setInterval(
    ()=> monster.textContent = monster_list[Math.floor( Math.random() * monster_list.length )],
    200,
);

function SelectStop(){
    clearInterval(timer_1P);
    clearInterval(timer_2P);
    clearInterval(timer_3P);
    clearInterval(timer_4P);
    clearInterval(timer_monster);
}

