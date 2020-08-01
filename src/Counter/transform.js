
let list = [{ "sheng": "广东省", "city": "广州市", "area": "白云区", "town": "景泰街道" }, { "sheng": "广东省", "city": "广州市", "area": "白云区", "town": "人和镇" }, { "sheng": "广东省", "city": "广州市", "area": "白云区", "town": "嘉禾街道" }, { "sheng": "广东省", "city": "广州市", "area": "花都区", "town": "花城街道" }, { "sheng": "广东省", "city": "广州市", "area": "黄埔区", "town": "永和街道" }, { "sheng": "广东省", "city": "广州市", "area": "天河区", "town": "前进街道" }, { "sheng": "广东省", "city": "广州市", "area": "越秀区", "town": "矿泉街道" }, { "sheng": "广东省", "city": "佛山市", "area": "南海区", "town": "大沥镇" }, { "sheng": "广东省", "city": "广州市", "area": "花都区", "town": "新雅街道" }, { "sheng": "广东省", "city": "广州市", "area": "黄埔区", "town": "联和街道" }, { "sheng": "广东省", "city": "佛山市", "area": "禅城区", "town": "张槎街道" }, { "sheng": "广东省", "city": "佛山市", "area": "禅城区", "town": "张槎街道" }, { "sheng": "广东省", "city": "广州市", "area": "白云区", "town": "白云湖街道" }, { "sheng": "广东省", "city": "广州市", "area": "白云区", "town": "松洲街道" }, { "sheng": "广东省", "city": "佛山市", "area": "南海区", "town": "西樵镇" }, { "sheng": "广东省", "city": "广州市", "area": "番禺区", "town": "大龙街道" }, { "sheng": "广东省", "city": "广州市", "area": "天河区", "town": "天园街道" }, { "sheng": "广东省", "city": "佛山市", "area": "高明区", "town": "荷城街道" }, { "sheng": "广东省", "city": "广州市", "area": "白云区", "town": "太和镇" }, { "sheng": "广东省", "city": "广州市", "area": "天河区", "town": "长兴街道" }, { "sheng": "广东省", "city": "佛山市", "area": "顺德区", "town": "乐从镇" }, { "sheng": "广东省", "city": "广州市", "area": "黄埔区", "town": "红山街道" }]
let result = list.reduce((prev, next) => {
  let province = prev.find(item => item.sheng === next.sheng)
  if (!province) {
    next = {
      sheng: next.sheng,
      children: [
        {
          city: next.city,
          children: [{
            area: next.area,
            children: [next.town]
          }]
        }
      ]
    }
    prev.push(next);
  } else {
    let city = province.children.find(item => item.city === next.city)
    if (!city) {
      province.children.push({
        city: next.city,
        children: [{
          area: next.area,
          children: [next.town]
        }]
      })
    } else {
      let area = city.children.find(item => item.area === next.area)
      if (!area) {
        city.children.push({
          area: next.area,
          children: [next.town]
        })
      } else {
        area.children.push(next.town)
      }
    }
  }
  return prev;
}, [])

console.log(JSON.stringify(result, null, 2));