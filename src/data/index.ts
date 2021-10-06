import { TScene, TAction } from "@/types";

const action = (data: string[][], timeout?: number): TAction => {
  return {
    action: "select",
    data,
    timeout,
  };
};

const endAction = action([["你挂了 - 重来", "1"]]);

export const text: { [key: string]: TScene } = {
  "1": [
    "某日",
    "你在一间废弃的医院中醒来",
    "你感到疑惑，回忆自己是如何来到这儿的，但怎么也想不起来，感觉自己忘记了什么",
    "你回忆自己的名字",
    "你叫王大铁，好在你没有忘记自己的名字",
    "一直呆着也不是办法，你壮起胆子准备四处探索一番，总有方法出去的，你决定",
    action([
      ["直接用椅子打碎窗户", "2"],
      ["尝试打开房间的门", "3"],
    ]),
  ],
  "2": [
    "你直接抄起身边的椅子朝窗户砸去",
    "你发现自己身处20层高楼，窗外是一片漆黑寂静，周围基本都是大山，不像是在城市中",
    "正当你考虑这如何逃出去，走廊传来了一阵脚步声",
    "你无法判断对方意图如何，所以你决定",
    action(
      [
        ["在门口埋伏", "4"],
        ["躲到床底", "end-bed"],
      ],
      5
    ),
  ],
  "3": [
    "你尝试开门，发现门被锁的死死的",
    "突然，你听到走廊传来了一阵脚步声",
    "你无法判断对方意图如何，所以你决定",
    action(
      [
        ["在门口埋伏", "4"],
        ["躲到床底", "5"],
      ],
      5
    ),
  ],
  "4": [
    // 埋伏
    "你抄起身边的椅子在门边埋伏",
    "对方刚一开门，你就直接把椅子朝他用力扔去，他被椅子砸倒在地",
    "你看他只是暂时被制住了，但他似乎马上就能爬起来反击",
    "你决定逃命",
    action(
      [
        ["往左边跑", "end-bed"],
        ["往右边跑", "end-bed"],
      ],
      4
    ),
  ],
  "5": [
    // 没有砸窗户
    "你躲在床底，不敢出声，只能听到自己的心跳声",
    "门被打开了，你只看到一双腐烂的双脚在慢慢移动",
    "不过他在门口停留了一会儿，就离开了",
    "显然，这个地方非常的危险，随便乱跑可能会丢了性命，你决定",
    action([
      ["睡一觉或许就天亮有人来找你了", "end-bed"],
      ["往左边跑", "end-bed"],
      ["往右边跑", "end-bed"],
    ]),
  ],
  "end-bed": [
    "你躲在床底下，看到门被打开",
    "你只看到一双腐烂的双脚在慢慢移动，寂静中除了自己的心跳声，还能听到对方嘴里碎碎念些什么",
    "他走到刚被砸碎的窗户边停留了一会儿，开始往回走",
    "你以为自己躲在床底下就安全了",
    "突然，他蹲了下来搜寻床底",
    "你和他四目相对，他是一个面部扭曲的人，仿佛被化学物品侵蚀了一般",
    "你看清了他的脸，但他也抓住了你，你被扔了下去",
    endAction,
  ],
};
