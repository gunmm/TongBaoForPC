//var ip = 'http://www.cnsyear.cn';
var ip = 'http://192.168.1.120:8080';

var provinceCity = '[{"deep":1,"name":"北京市","id":1,"sort":0,"parentId":0},{"deep":1,"name":"天津市","id":2,"sort":0,"parentId":0},{"deep":1,"name":"河北省","id":3,"sort":0,"parentId":0},{"deep":1,"name":"山西省","id":4,"sort":0,"parentId":0},{"deep":1,"name":"内蒙古","id":5,"sort":0,"parentId":0},{"deep":1,"name":"辽宁省","id":6,"sort":0,"parentId":0},{"deep":1,"name":"吉林省","id":7,"sort":0,"parentId":0},{"deep":1,"name":"黑龙江省","id":8,"sort":0,"parentId":0},{"deep":1,"name":"上海市","id":9,"sort":0,"parentId":0},{"deep":1,"name":"江苏省","id":10,"sort":0,"parentId":0},{"deep":1,"name":"浙江省","id":11,"sort":0,"parentId":0},{"deep":1,"name":"安徽省","id":12,"sort":0,"parentId":0},{"deep":1,"name":"福建省","id":13,"sort":0,"parentId":0},{"deep":1,"name":"江西省","id":14,"sort":0,"parentId":0},{"deep":1,"name":"山东省","id":15,"sort":0,"parentId":0},{"deep":1,"name":"河南省","id":16,"sort":0,"parentId":0},{"deep":1,"name":"湖北省","id":17,"sort":0,"parentId":0},{"deep":1,"name":"湖南省","id":18,"sort":0,"parentId":0},{"deep":1,"name":"广东省","id":19,"sort":0,"parentId":0},{"deep":1,"name":"广西","id":20,"sort":0,"parentId":0},{"deep":1,"name":"海南省","id":21,"sort":0,"parentId":0},{"deep":1,"name":"重庆市","id":22,"sort":0,"parentId":0},{"deep":1,"name":"四川省","id":23,"sort":0,"parentId":0},{"deep":1,"name":"贵州省","id":24,"sort":0,"parentId":0},{"deep":1,"name":"云南省","id":25,"sort":0,"parentId":0},{"deep":1,"name":"西藏","id":26,"sort":0,"parentId":0},{"deep":1,"name":"陕西省","id":27,"sort":0,"parentId":0},{"deep":1,"name":"甘肃省","id":28,"sort":0,"parentId":0},{"deep":1,"name":"青海省","id":29,"sort":0,"parentId":0},{"deep":1,"name":"宁夏","id":30,"sort":0,"parentId":0},{"deep":1,"name":"新疆","id":31,"sort":0,"parentId":0},{"deep":2,"name":"东城区","id":37,"sort":0,"parentId":1},{"deep":2,"name":"西城区","id":38,"sort":0,"parentId":1},{"deep":2,"name":"朝阳区","id":41,"sort":0,"parentId":1},{"deep":2,"name":"丰台区","id":42,"sort":0,"parentId":1},{"deep":2,"name":"石景山区","id":43,"sort":0,"parentId":1},{"deep":2,"name":"海淀区","id":44,"sort":0,"parentId":1},{"deep":2,"name":"门头沟区","id":45,"sort":0,"parentId":1},{"deep":2,"name":"房山区","id":46,"sort":0,"parentId":1},{"deep":2,"name":"通州区","id":47,"sort":0,"parentId":1},{"deep":2,"name":"顺义区","id":48,"sort":0,"parentId":1},{"deep":2,"name":"昌平区","id":49,"sort":0,"parentId":1},{"deep":2,"name":"大兴区","id":50,"sort":0,"parentId":1},{"deep":2,"name":"怀柔区","id":51,"sort":0,"parentId":1},{"deep":2,"name":"平谷区","id":52,"sort":0,"parentId":1},{"deep":2,"name":"密云县","id":53,"sort":0,"parentId":1},{"deep":2,"name":"延庆县","id":54,"sort":0,"parentId":1},{"deep":2,"name":"和平区","id":55,"sort":0,"parentId":2},{"deep":2,"name":"河东区","id":56,"sort":0,"parentId":2},{"deep":2,"name":"河西区","id":57,"sort":0,"parentId":2},{"deep":2,"name":"南开区","id":58,"sort":0,"parentId":2},{"deep":2,"name":"河北区","id":59,"sort":0,"parentId":2},{"deep":2,"name":"红桥区","id":60,"sort":0,"parentId":2},{"deep":2,"name":"塘沽区","id":61,"sort":0,"parentId":2},{"deep":2,"name":"东丽区","id":64,"sort":0,"parentId":2},{"deep":2,"name":"西青区","id":65,"sort":0,"parentId":2},{"deep":2,"name":"津南区","id":66,"sort":0,"parentId":2},{"deep":2,"name":"北辰区","id":67,"sort":0,"parentId":2},{"deep":2,"name":"武清区","id":68,"sort":0,"parentId":2},{"deep":2,"name":"宝坻区","id":69,"sort":0,"parentId":2},{"deep":2,"name":"宁河县","id":70,"sort":0,"parentId":2},{"deep":2,"name":"静海县","id":71,"sort":0,"parentId":2},{"deep":2,"name":"蓟县","id":72,"sort":0,"parentId":2},{"deep":2,"name":"石家庄市","id":73,"sort":0,"parentId":3},{"deep":2,"name":"唐山市","id":74,"sort":0,"parentId":3},{"deep":2,"name":"秦皇岛市","id":75,"sort":0,"parentId":3},{"deep":2,"name":"邯郸市","id":76,"sort":0,"parentId":3},{"deep":2,"name":"邢台市","id":77,"sort":0,"parentId":3},{"deep":2,"name":"保定市","id":78,"sort":0,"parentId":3},{"deep":2,"name":"张家口市","id":79,"sort":0,"parentId":3},{"deep":2,"name":"承德市","id":80,"sort":0,"parentId":3},{"deep":2,"name":"衡水市","id":81,"sort":0,"parentId":3},{"deep":2,"name":"廊坊市","id":82,"sort":0,"parentId":3},{"deep":2,"name":"沧州市","id":83,"sort":0,"parentId":3},{"deep":2,"name":"太原市","id":84,"sort":0,"parentId":4},{"deep":2,"name":"大同市","id":85,"sort":0,"parentId":4},{"deep":2,"name":"阳泉市","id":86,"sort":0,"parentId":4},{"deep":2,"name":"长治市","id":87,"sort":0,"parentId":4},{"deep":2,"name":"晋城市","id":88,"sort":0,"parentId":4},{"deep":2,"name":"朔州市","id":89,"sort":0,"parentId":4},{"deep":2,"name":"晋中市","id":90,"sort":0,"parentId":4},{"deep":2,"name":"运城市","id":91,"sort":0,"parentId":4},{"deep":2,"name":"忻州市","id":92,"sort":0,"parentId":4},{"deep":2,"name":"临汾市","id":93,"sort":0,"parentId":4},{"deep":2,"name":"吕梁市","id":94,"sort":0,"parentId":4},{"deep":2,"name":"呼和浩特市","id":95,"sort":0,"parentId":5},{"deep":2,"name":"包头市","id":96,"sort":0,"parentId":5},{"deep":2,"name":"乌海市","id":97,"sort":0,"parentId":5},{"deep":2,"name":"赤峰市","id":98,"sort":0,"parentId":5},{"deep":2,"name":"通辽市","id":99,"sort":0,"parentId":5},{"deep":2,"name":"鄂尔多斯市","id":100,"sort":0,"parentId":5},{"deep":2,"name":"呼伦贝尔市","id":101,"sort":0,"parentId":5},{"deep":2,"name":"巴彦淖尔市","id":102,"sort":0,"parentId":5},{"deep":2,"name":"乌兰察布市","id":103,"sort":0,"parentId":5},{"deep":2,"name":"兴安盟","id":104,"sort":0,"parentId":5},{"deep":2,"name":"锡林郭勒盟","id":105,"sort":0,"parentId":5},{"deep":2,"name":"阿拉善盟","id":106,"sort":0,"parentId":5},{"deep":2,"name":"沈阳市","id":107,"sort":0,"parentId":6},{"deep":2,"name":"大连市","id":108,"sort":0,"parentId":6},{"deep":2,"name":"鞍山市","id":109,"sort":0,"parentId":6},{"deep":2,"name":"抚顺市","id":110,"sort":0,"parentId":6},{"deep":2,"name":"本溪市","id":111,"sort":0,"parentId":6},{"deep":2,"name":"丹东市","id":112,"sort":0,"parentId":6},{"deep":2,"name":"锦州市","id":113,"sort":0,"parentId":6},{"deep":2,"name":"营口市","id":114,"sort":0,"parentId":6},{"deep":2,"name":"阜新市","id":115,"sort":0,"parentId":6},{"deep":2,"name":"辽阳市","id":116,"sort":0,"parentId":6},{"deep":2,"name":"盘锦市","id":117,"sort":0,"parentId":6},{"deep":2,"name":"铁岭市","id":118,"sort":0,"parentId":6},{"deep":2,"name":"朝阳市","id":119,"sort":0,"parentId":6},{"deep":2,"name":"葫芦岛市","id":120,"sort":0,"parentId":6},{"deep":2,"name":"长春市","id":121,"sort":0,"parentId":7},{"deep":2,"name":"吉林市","id":122,"sort":0,"parentId":7},{"deep":2,"name":"四平市","id":123,"sort":0,"parentId":7},{"deep":2,"name":"辽源市","id":124,"sort":0,"parentId":7},{"deep":2,"name":"通化市","id":125,"sort":0,"parentId":7},{"deep":2,"name":"白山市","id":126,"sort":0,"parentId":7},{"deep":2,"name":"松原市","id":127,"sort":0,"parentId":7},{"deep":2,"name":"白城市","id":128,"sort":0,"parentId":7},{"deep":2,"name":"延边","id":129,"sort":0,"parentId":7},{"deep":2,"name":"哈尔滨市","id":130,"sort":0,"parentId":8},{"deep":2,"name":"齐齐哈尔市","id":131,"sort":0,"parentId":8},{"deep":2,"name":"鸡西市","id":132,"sort":0,"parentId":8},{"deep":2,"name":"鹤岗市","id":133,"sort":0,"parentId":8},{"deep":2,"name":"双鸭山市","id":134,"sort":0,"parentId":8},{"deep":2,"name":"大庆市","id":135,"sort":0,"parentId":8},{"deep":2,"name":"伊春市","id":136,"sort":0,"parentId":8},{"deep":2,"name":"佳木斯市","id":137,"sort":0,"parentId":8},{"deep":2,"name":"七台河市","id":138,"sort":0,"parentId":8},{"deep":2,"name":"牡丹江市","id":139,"sort":0,"parentId":8},{"deep":2,"name":"黑河市","id":140,"sort":0,"parentId":8},{"deep":2,"name":"绥化市","id":141,"sort":0,"parentId":8},{"deep":2,"name":"大兴安岭","id":142,"sort":0,"parentId":8},{"deep":2,"name":"黄浦区","id":143,"sort":0,"parentId":9},{"deep":2,"name":"卢湾区","id":144,"sort":0,"parentId":9},{"deep":2,"name":"徐汇区","id":145,"sort":0,"parentId":9},{"deep":2,"name":"长宁区","id":146,"sort":0,"parentId":9},{"deep":2,"name":"静安区","id":147,"sort":0,"parentId":9},{"deep":2,"name":"普陀区","id":148,"sort":0,"parentId":9},{"deep":2,"name":"闸北区","id":149,"sort":0,"parentId":9},{"deep":2,"name":"虹口区","id":150,"sort":0,"parentId":9},{"deep":2,"name":"杨浦区","id":151,"sort":0,"parentId":9},{"deep":2,"name":"闵行区","id":152,"sort":0,"parentId":9},{"deep":2,"name":"宝山区","id":153,"sort":0,"parentId":9},{"deep":2,"name":"嘉定区","id":154,"sort":0,"parentId":9},{"deep":2,"name":"浦东新区","id":155,"sort":0,"parentId":9},{"deep":2,"name":"金山区","id":156,"sort":0,"parentId":9},{"deep":2,"name":"松江区","id":157,"sort":0,"parentId":9},{"deep":2,"name":"青浦区","id":158,"sort":0,"parentId":9},{"deep":2,"name":"南汇区","id":159,"sort":0,"parentId":9},{"deep":2,"name":"奉贤区","id":160,"sort":0,"parentId":9},{"deep":2,"name":"崇明县","id":161,"sort":0,"parentId":9},{"deep":2,"name":"南京市","id":162,"sort":0,"parentId":10},{"deep":2,"name":"无锡市","id":163,"sort":0,"parentId":10},{"deep":2,"name":"徐州市","id":164,"sort":0,"parentId":10},{"deep":2,"name":"常州市","id":165,"sort":0,"parentId":10},{"deep":2,"name":"苏州市","id":166,"sort":0,"parentId":10},{"deep":2,"name":"南通市","id":167,"sort":0,"parentId":10},{"deep":2,"name":"连云港市","id":168,"sort":0,"parentId":10},{"deep":2,"name":"淮安市","id":169,"sort":0,"parentId":10},{"deep":2,"name":"盐城市","id":170,"sort":0,"parentId":10},{"deep":2,"name":"扬州市","id":171,"sort":0,"parentId":10},{"deep":2,"name":"镇江市","id":172,"sort":0,"parentId":10},{"deep":2,"name":"泰州市","id":173,"sort":0,"parentId":10},{"deep":2,"name":"宿迁市","id":174,"sort":0,"parentId":10},{"deep":2,"name":"杭州市","id":175,"sort":0,"parentId":11},{"deep":2,"name":"宁波市","id":176,"sort":0,"parentId":11},{"deep":2,"name":"温州市","id":177,"sort":0,"parentId":11},{"deep":2,"name":"嘉兴市","id":178,"sort":0,"parentId":11},{"deep":2,"name":"湖州市","id":179,"sort":0,"parentId":11},{"deep":2,"name":"绍兴市","id":180,"sort":0,"parentId":11},{"deep":2,"name":"舟山市","id":181,"sort":0,"parentId":11},{"deep":2,"name":"衢州市","id":182,"sort":0,"parentId":11},{"deep":2,"name":"金华市","id":183,"sort":0,"parentId":11},{"deep":2,"name":"台州市","id":184,"sort":0,"parentId":11},{"deep":2,"name":"丽水市","id":185,"sort":0,"parentId":11},{"deep":2,"name":"合肥市","id":186,"sort":0,"parentId":12},{"deep":2,"name":"芜湖市","id":187,"sort":0,"parentId":12},{"deep":2,"name":"蚌埠市","id":188,"sort":0,"parentId":12},{"deep":2,"name":"淮南市","id":189,"sort":0,"parentId":12},{"deep":2,"name":"马鞍山市","id":190,"sort":0,"parentId":12},{"deep":2,"name":"淮北市","id":191,"sort":0,"parentId":12},{"deep":2,"name":"铜陵市","id":192,"sort":0,"parentId":12},{"deep":2,"name":"安庆市","id":193,"sort":0,"parentId":12},{"deep":2,"name":"黄山市","id":194,"sort":0,"parentId":12},{"deep":2,"name":"滁州市","id":195,"sort":0,"parentId":12},{"deep":2,"name":"阜阳市","id":196,"sort":0,"parentId":12},{"deep":2,"name":"宿州市","id":197,"sort":0,"parentId":12},{"deep":2,"name":"巢湖市","id":198,"sort":0,"parentId":12},{"deep":2,"name":"六安市","id":199,"sort":0,"parentId":12},{"deep":2,"name":"亳州市","id":200,"sort":0,"parentId":12},{"deep":2,"name":"池州市","id":201,"sort":0,"parentId":12},{"deep":2,"name":"宣城市","id":202,"sort":0,"parentId":12},{"deep":2,"name":"福州市","id":203,"sort":0,"parentId":13},{"deep":2,"name":"厦门市","id":204,"sort":0,"parentId":13},{"deep":2,"name":"莆田市","id":205,"sort":0,"parentId":13},{"deep":2,"name":"三明市","id":206,"sort":0,"parentId":13},{"deep":2,"name":"泉州市","id":207,"sort":0,"parentId":13},{"deep":2,"name":"漳州市","id":208,"sort":0,"parentId":13},{"deep":2,"name":"南平市","id":209,"sort":0,"parentId":13},{"deep":2,"name":"龙岩市","id":210,"sort":0,"parentId":13},{"deep":2,"name":"宁德市","id":211,"sort":0,"parentId":13},{"deep":2,"name":"南昌市","id":212,"sort":0,"parentId":14},{"deep":2,"name":"景德镇市","id":213,"sort":0,"parentId":14},{"deep":2,"name":"萍乡市","id":214,"sort":0,"parentId":14},{"deep":2,"name":"九江市","id":215,"sort":0,"parentId":14},{"deep":2,"name":"新余市","id":216,"sort":0,"parentId":14},{"deep":2,"name":"鹰潭市","id":217,"sort":0,"parentId":14},{"deep":2,"name":"赣州市","id":218,"sort":0,"parentId":14},{"deep":2,"name":"吉安市","id":219,"sort":0,"parentId":14},{"deep":2,"name":"宜春市","id":220,"sort":0,"parentId":14},{"deep":2,"name":"抚州市","id":221,"sort":0,"parentId":14},{"deep":2,"name":"上饶市","id":222,"sort":0,"parentId":14},{"deep":2,"name":"济南市","id":223,"sort":0,"parentId":15},{"deep":2,"name":"青岛市","id":224,"sort":0,"parentId":15},{"deep":2,"name":"淄博市","id":225,"sort":0,"parentId":15},{"deep":2,"name":"枣庄市","id":226,"sort":0,"parentId":15},{"deep":2,"name":"东营市","id":227,"sort":0,"parentId":15},{"deep":2,"name":"烟台市","id":228,"sort":0,"parentId":15},{"deep":2,"name":"潍坊市","id":229,"sort":0,"parentId":15},{"deep":2,"name":"济宁市","id":230,"sort":0,"parentId":15},{"deep":2,"name":"泰安市","id":231,"sort":0,"parentId":15},{"deep":2,"name":"威海市","id":232,"sort":0,"parentId":15},{"deep":2,"name":"日照市","id":233,"sort":0,"parentId":15},{"deep":2,"name":"莱芜市","id":234,"sort":0,"parentId":15},{"deep":2,"name":"临沂市","id":235,"sort":0,"parentId":15},{"deep":2,"name":"德州市","id":236,"sort":0,"parentId":15},{"deep":2,"name":"聊城市","id":237,"sort":0,"parentId":15},{"deep":2,"name":"滨州市","id":238,"sort":0,"parentId":15},{"deep":2,"name":"菏泽市","id":239,"sort":0,"parentId":15},{"deep":2,"name":"郑州市","id":240,"sort":0,"parentId":16},{"deep":2,"name":"开封市","id":241,"sort":0,"parentId":16},{"deep":2,"name":"洛阳市","id":242,"sort":0,"parentId":16},{"deep":2,"name":"平顶山市","id":243,"sort":0,"parentId":16},{"deep":2,"name":"安阳市","id":244,"sort":0,"parentId":16},{"deep":2,"name":"鹤壁市","id":245,"sort":0,"parentId":16},{"deep":2,"name":"新乡市","id":246,"sort":0,"parentId":16},{"deep":2,"name":"焦作市","id":247,"sort":0,"parentId":16},{"deep":2,"name":"濮阳市","id":248,"sort":0,"parentId":16},{"deep":2,"name":"许昌市","id":249,"sort":0,"parentId":16},{"deep":2,"name":"漯河市","id":250,"sort":0,"parentId":16},{"deep":2,"name":"三门峡市","id":251,"sort":0,"parentId":16},{"deep":2,"name":"南阳市","id":252,"sort":0,"parentId":16},{"deep":2,"name":"商丘市","id":253,"sort":0,"parentId":16},{"deep":2,"name":"信阳市","id":254,"sort":0,"parentId":16},{"deep":2,"name":"周口市","id":255,"sort":0,"parentId":16},{"deep":2,"name":"驻马店市","id":256,"sort":0,"parentId":16},{"deep":2,"name":"济源市","id":257,"sort":0,"parentId":16},{"deep":2,"name":"武汉市","id":258,"sort":0,"parentId":17},{"deep":2,"name":"黄石市","id":259,"sort":0,"parentId":17},{"deep":2,"name":"十堰市","id":260,"sort":0,"parentId":17},{"deep":2,"name":"宜昌市","id":261,"sort":0,"parentId":17},{"deep":2,"name":"襄樊市","id":262,"sort":0,"parentId":17},{"deep":2,"name":"鄂州市","id":263,"sort":0,"parentId":17},{"deep":2,"name":"荆门市","id":264,"sort":0,"parentId":17},{"deep":2,"name":"孝感市","id":265,"sort":0,"parentId":17},{"deep":2,"name":"荆州市","id":266,"sort":0,"parentId":17},{"deep":2,"name":"黄冈市","id":267,"sort":0,"parentId":17},{"deep":2,"name":"咸宁市","id":268,"sort":0,"parentId":17},{"deep":2,"name":"随州市","id":269,"sort":0,"parentId":17},{"deep":2,"name":"恩施","id":270,"sort":0,"parentId":17},{"deep":2,"name":"仙桃市","id":271,"sort":0,"parentId":17},{"deep":2,"name":"潜江市","id":272,"sort":0,"parentId":17},{"deep":2,"name":"天门市","id":273,"sort":0,"parentId":17},{"deep":2,"name":"长沙市","id":275,"sort":0,"parentId":18},{"deep":2,"name":"株洲市","id":276,"sort":0,"parentId":18},{"deep":2,"name":"湘潭市","id":277,"sort":0,"parentId":18},{"deep":2,"name":"衡阳市","id":278,"sort":0,"parentId":18},{"deep":2,"name":"邵阳市","id":279,"sort":0,"parentId":18},{"deep":2,"name":"岳阳市","id":280,"sort":0,"parentId":18},{"deep":2,"name":"常德市","id":281,"sort":0,"parentId":18},{"deep":2,"name":"张家界市","id":282,"sort":0,"parentId":18},{"deep":2,"name":"益阳市","id":283,"sort":0,"parentId":18},{"deep":2,"name":"郴州市","id":284,"sort":0,"parentId":18},{"deep":2,"name":"永州市","id":285,"sort":0,"parentId":18},{"deep":2,"name":"怀化市","id":286,"sort":0,"parentId":18},{"deep":2,"name":"娄底市","id":287,"sort":0,"parentId":18},{"deep":2,"name":"广州市","id":289,"sort":0,"parentId":19},{"deep":2,"name":"韶关市","id":290,"sort":0,"parentId":19},{"deep":2,"name":"深圳市","id":291,"sort":0,"parentId":19},{"deep":2,"name":"珠海市","id":292,"sort":0,"parentId":19},{"deep":2,"name":"汕头市","id":293,"sort":0,"parentId":19},{"deep":2,"name":"佛山市","id":294,"sort":0,"parentId":19},{"deep":2,"name":"江门市","id":295,"sort":0,"parentId":19},{"deep":2,"name":"湛江市","id":296,"sort":0,"parentId":19},{"deep":2,"name":"茂名市","id":297,"sort":0,"parentId":19},{"deep":2,"name":"肇庆市","id":298,"sort":0,"parentId":19},{"deep":2,"name":"惠州市","id":299,"sort":0,"parentId":19},{"deep":2,"name":"梅州市","id":300,"sort":0,"parentId":19},{"deep":2,"name":"汕尾市","id":301,"sort":0,"parentId":19},{"deep":2,"name":"河源市","id":302,"sort":0,"parentId":19},{"deep":2,"name":"阳江市","id":303,"sort":0,"parentId":19},{"deep":2,"name":"清远市","id":304,"sort":0,"parentId":19},{"deep":2,"name":"东莞市","id":305,"sort":0,"parentId":19},{"deep":2,"name":"中山市","id":306,"sort":0,"parentId":19},{"deep":2,"name":"潮州市","id":307,"sort":0,"parentId":19},{"deep":2,"name":"揭阳市","id":308,"sort":0,"parentId":19},{"deep":2,"name":"云浮市","id":309,"sort":0,"parentId":19},{"deep":2,"name":"南宁市","id":310,"sort":0,"parentId":20},{"deep":2,"name":"柳州市","id":311,"sort":0,"parentId":20},{"deep":2,"name":"桂林市","id":312,"sort":0,"parentId":20},{"deep":2,"name":"梧州市","id":313,"sort":0,"parentId":20},{"deep":2,"name":"北海市","id":314,"sort":0,"parentId":20},{"deep":2,"name":"防城港市","id":315,"sort":0,"parentId":20},{"deep":2,"name":"钦州市","id":316,"sort":0,"parentId":20},{"deep":2,"name":"贵港市","id":317,"sort":0,"parentId":20},{"deep":2,"name":"玉林市","id":318,"sort":0,"parentId":20},{"deep":2,"name":"百色市","id":319,"sort":0,"parentId":20},{"deep":2,"name":"贺州市","id":320,"sort":0,"parentId":20},{"deep":2,"name":"河池市","id":321,"sort":0,"parentId":20},{"deep":2,"name":"来宾市","id":322,"sort":0,"parentId":20},{"deep":2,"name":"崇左市","id":323,"sort":0,"parentId":20},{"deep":2,"name":"海口市","id":324,"sort":0,"parentId":21},{"deep":2,"name":"三亚市","id":325,"sort":0,"parentId":21},{"deep":2,"name":"五指山市","id":326,"sort":0,"parentId":21},{"deep":2,"name":"琼海市","id":327,"sort":0,"parentId":21},{"deep":2,"name":"儋州市","id":328,"sort":0,"parentId":21},{"deep":2,"name":"文昌市","id":329,"sort":0,"parentId":21},{"deep":2,"name":"万宁市","id":330,"sort":0,"parentId":21},{"deep":2,"name":"东方市","id":331,"sort":0,"parentId":21},{"deep":2,"name":"定安县","id":332,"sort":0,"parentId":21},{"deep":2,"name":"屯昌县","id":333,"sort":0,"parentId":21},{"deep":2,"name":"澄迈县","id":334,"sort":0,"parentId":21},{"deep":2,"name":"临高县","id":335,"sort":0,"parentId":21},{"deep":2,"name":"万州区","id":345,"sort":0,"parentId":22},{"deep":2,"name":"涪陵区","id":346,"sort":0,"parentId":22},{"deep":2,"name":"渝中区","id":347,"sort":0,"parentId":22},{"deep":2,"name":"大渡口区","id":348,"sort":0,"parentId":22},{"deep":2,"name":"江北区","id":349,"sort":0,"parentId":22},{"deep":2,"name":"沙坪坝区","id":350,"sort":0,"parentId":22},{"deep":2,"name":"九龙坡区","id":351,"sort":0,"parentId":22},{"deep":2,"name":"南岸区","id":352,"sort":0,"parentId":22},{"deep":2,"name":"北碚区","id":353,"sort":0,"parentId":22},{"deep":2,"name":"双桥区","id":354,"sort":0,"parentId":22},{"deep":2,"name":"万盛区","id":355,"sort":0,"parentId":22},{"deep":2,"name":"渝北区","id":356,"sort":0,"parentId":22},{"deep":2,"name":"巴南区","id":357,"sort":0,"parentId":22},{"deep":2,"name":"黔江区","id":358,"sort":0,"parentId":22},{"deep":2,"name":"长寿区","id":359,"sort":0,"parentId":22},{"deep":2,"name":"綦江县","id":360,"sort":0,"parentId":22},{"deep":2,"name":"潼南县","id":361,"sort":0,"parentId":22},{"deep":2,"name":"铜梁县","id":362,"sort":0,"parentId":22},{"deep":2,"name":"大足县","id":363,"sort":0,"parentId":22},{"deep":2,"name":"荣昌县","id":364,"sort":0,"parentId":22},{"deep":2,"name":"璧山县","id":365,"sort":0,"parentId":22},{"deep":2,"name":"梁平县","id":366,"sort":0,"parentId":22},{"deep":2,"name":"城口县","id":367,"sort":0,"parentId":22},{"deep":2,"name":"丰都县","id":368,"sort":0,"parentId":22},{"deep":2,"name":"垫江县","id":369,"sort":0,"parentId":22},{"deep":2,"name":"武隆县","id":370,"sort":0,"parentId":22},{"deep":2,"name":"忠县","id":371,"sort":0,"parentId":22},{"deep":2,"name":"开县","id":372,"sort":0,"parentId":22},{"deep":2,"name":"云阳县","id":373,"sort":0,"parentId":22},{"deep":2,"name":"奉节县","id":374,"sort":0,"parentId":22},{"deep":2,"name":"巫山县","id":375,"sort":0,"parentId":22},{"deep":2,"name":"巫溪县","id":376,"sort":0,"parentId":22},{"deep":2,"name":"江津市","id":381,"sort":0,"parentId":22},{"deep":2,"name":"合川市","id":382,"sort":0,"parentId":22},{"deep":2,"name":"永川市","id":383,"sort":0,"parentId":22},{"deep":2,"name":"南川市","id":384,"sort":0,"parentId":22},{"deep":2,"name":"成都市","id":385,"sort":0,"parentId":23},{"deep":2,"name":"自贡市","id":386,"sort":0,"parentId":23},{"deep":2,"name":"攀枝花市","id":387,"sort":0,"parentId":23},{"deep":2,"name":"泸州市","id":388,"sort":0,"parentId":23},{"deep":2,"name":"德阳市","id":389,"sort":0,"parentId":23},{"deep":2,"name":"绵阳市","id":390,"sort":0,"parentId":23},{"deep":2,"name":"广元市","id":391,"sort":0,"parentId":23},{"deep":2,"name":"遂宁市","id":392,"sort":0,"parentId":23},{"deep":2,"name":"内江市","id":393,"sort":0,"parentId":23},{"deep":2,"name":"乐山市","id":394,"sort":0,"parentId":23},{"deep":2,"name":"南充市","id":395,"sort":0,"parentId":23},{"deep":2,"name":"眉山市","id":396,"sort":0,"parentId":23},{"deep":2,"name":"宜宾市","id":397,"sort":0,"parentId":23},{"deep":2,"name":"广安市","id":398,"sort":0,"parentId":23},{"deep":2,"name":"达州市","id":399,"sort":0,"parentId":23},{"deep":2,"name":"雅安市","id":400,"sort":0,"parentId":23},{"deep":2,"name":"巴中市","id":401,"sort":0,"parentId":23},{"deep":2,"name":"资阳市","id":402,"sort":0,"parentId":23},{"deep":2,"name":"贵阳市","id":406,"sort":0,"parentId":24},{"deep":2,"name":"六盘水市","id":407,"sort":0,"parentId":24},{"deep":2,"name":"遵义市","id":408,"sort":0,"parentId":24},{"deep":2,"name":"安顺市","id":409,"sort":0,"parentId":24},{"deep":2,"name":"昆明市","id":415,"sort":0,"parentId":25},{"deep":2,"name":"曲靖市","id":416,"sort":0,"parentId":25},{"deep":2,"name":"玉溪市","id":417,"sort":0,"parentId":25},{"deep":2,"name":"保山市","id":418,"sort":0,"parentId":25},{"deep":2,"name":"昭通市","id":419,"sort":0,"parentId":25},{"deep":2,"name":"丽江市","id":420,"sort":0,"parentId":25},{"deep":2,"name":"思茅市","id":421,"sort":0,"parentId":25},{"deep":2,"name":"临沧市","id":422,"sort":0,"parentId":25},{"deep":2,"name":"拉萨市","id":431,"sort":0,"parentId":26},{"deep":2,"name":"西安市","id":438,"sort":0,"parentId":27},{"deep":2,"name":"铜川市","id":439,"sort":0,"parentId":27},{"deep":2,"name":"宝鸡市","id":440,"sort":0,"parentId":27},{"deep":2,"name":"咸阳市","id":441,"sort":0,"parentId":27},{"deep":2,"name":"渭南市","id":442,"sort":0,"parentId":27},{"deep":2,"name":"延安市","id":443,"sort":0,"parentId":27},{"deep":2,"name":"汉中市","id":444,"sort":0,"parentId":27},{"deep":2,"name":"榆林市","id":445,"sort":0,"parentId":27},{"deep":2,"name":"安康市","id":446,"sort":0,"parentId":27},{"deep":2,"name":"商洛市","id":447,"sort":0,"parentId":27},{"deep":2,"name":"兰州市","id":448,"sort":0,"parentId":28},{"deep":2,"name":"嘉峪关市","id":449,"sort":0,"parentId":28},{"deep":2,"name":"金昌市","id":450,"sort":0,"parentId":28},{"deep":2,"name":"白银市","id":451,"sort":0,"parentId":28},{"deep":2,"name":"天水市","id":452,"sort":0,"parentId":28},{"deep":2,"name":"武威市","id":453,"sort":0,"parentId":28},{"deep":2,"name":"张掖市","id":454,"sort":0,"parentId":28},{"deep":2,"name":"平凉市","id":455,"sort":0,"parentId":28},{"deep":2,"name":"酒泉市","id":456,"sort":0,"parentId":28},{"deep":2,"name":"庆阳市","id":457,"sort":0,"parentId":28},{"deep":2,"name":"定西市","id":458,"sort":0,"parentId":28},{"deep":2,"name":"陇南市","id":459,"sort":0,"parentId":28},{"deep":2,"name":"西宁市","id":462,"sort":0,"parentId":29},{"deep":2,"name":"银川市","id":470,"sort":0,"parentId":30},{"deep":2,"name":"石嘴山市","id":471,"sort":0,"parentId":30},{"deep":2,"name":"吴忠市","id":472,"sort":0,"parentId":30},{"deep":2,"name":"固原市","id":473,"sort":0,"parentId":30},{"deep":2,"name":"中卫市","id":474,"sort":0,"parentId":30},{"deep":2,"name":"乌鲁木齐市","id":475,"sort":0,"parentId":31},{"deep":2,"name":"克拉玛依市","id":476,"sort":0,"parentId":31},{"deep":2,"name":"石河子市","id":489,"sort":0,"parentId":31},{"deep":2,"name":"阿拉尔市","id":490,"sort":0,"parentId":31},{"deep":2,"name":"图木舒克市","id":491,"sort":0,"parentId":31},{"deep":2,"name":"五家渠市","id":492,"sort":0,"parentId":31}]';

var vm = new Vue();

localStorage.userId = 837;

function asJump() {
	as.jump();
}

var urlStr = window.location.href;
var sign = true;
var wxsign = true;
if(urlStr.indexOf('code=') > 0 && !localStorage.code) {
	$('#app').hide();
	wxsign = false;
	var code = new QueryString()['code'];
	localStorage.code = code;
	post('/weixinCon/userInfoPC', {
		code: code
	}, function(data) {
		$('#app').show();
		wxsign = true;
		localStorage.code = code;
		localStorage.userId = data.result.userId;
		localStorage.openid = data.result.openid;
		localStorage.accessToken = data.result.requestToken;
		window.location.reload();
	})
}

//if(urlStr.indexOf('userInfoJson=') > 0) {
//	var str = decodeURI(urlStr);
//	var userInfo = JSON.parse(str.split('userInfoJson=')[1]);
//	localStorage.userId = userInfo.userId;
//	localStorage.accessToken = userInfo.requestToken;
//}

if(!localStorage.userId && !localStorage.code) {
	wxAuthorization(window.location.href, function(data) {
		window.location.replace(data.result);
	})
}

log(localStorage.userId);
log(localStorage.accessToken);

/**
 * 网络请求 * @param {Object} url	链接
 * @param {Object} data	 请求参数
 * @param {Object} callback  请求成功回调
 * @param {Object} callback1  请求失败回调
 */
function post(url, data, callback, loading, callback1) {
	data['userId'] = localStorage.userId;
	data['openid'] = localStorage.openid;
	data['requestToken'] = localStorage.accessToken;
	if(loading == null ? true : false) {
		addLoading();
	}
	$.ajax({
		type: "post",
		url: ip + url,
		async: true,
		traditional: true,
		data: data,
		success: function(data) {
			log(url + "==>>" + JSON.stringify(data));
			removeLoading();
			if(data.result_code != 1) {
				myAlert(data.reason);
				if(callback1 != null) {
					callback1();
				}
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			if(data.status == 510) {
				localStorage.clear();
				if(sign && wxsign) {
					wxAuthorization(window.location.href, function(data) {
						window.location.replace(data.result);
					})
					sign = false;
				}
				return;
			}
			myAlert('服务器连接失败');
		}
	});
}

function post1(url, async, data, callback) {
	data['userId'] = localStorage.userId;
	data['openid'] = localStorage.openid;
	data['requestToken'] = localStorage.accessToken;
	addLoading();
	$.ajax({
		type: "post",
		url: ip + url,
		async: async,
		data: data,
		success: function(data) {
			removeLoading();
			if(data.result_code != 1) {
				myAlert(data.reason);
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			if(data.status == 510) {
				localStorage.clear();
				if(sign && wxsign) {
					wxAuthorization(window.location.href, function(data) {
						window.location.replace(data.result);
					})
					sign = false;
				}
				return;
			}
			myAlert('服务器连接失败');
		}
	});
}

function QueryString() {
	var name, value, i;
	var str = decodeURI(location.href);
	var num = str.indexOf("?")
	str = str.substr(num + 1);
	var arrtmp = str.split("&");
	for(i = 0; i < arrtmp.length; i++) {
		num = arrtmp[i].indexOf("=");
		if(num > 0) {
			name = arrtmp[i].substring(0, num);
			value = arrtmp[i].substr(num + 1);
			this[name] = value;
		}
	}
}

/**
 * 将文本转义字符替换为HTML可识别的字符
 * @param {Object} str
 */
function strReplace(str) {
	if(str) {
		return str.replace(/\ /g, "&nbsp;").replace(/\n/g, "<br/>");
	}
}

/**
 * 隐藏第一位之后的文字
 * @param {Object} str
 */
function hideStr(str) {
	if(str) {
		var s = str[0];
		for(var i = 0; i < str.length; i++) {
			if(i > 0) {
				s += '*';
			}
		}
		return s;
	}
}

Array.prototype.indexOf = function(val) {
	for(var i = 0; i < this.length; i++) {
		if(this[i] == val) return i;
	}
	return -1;
};

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if(index > -1) {
		this.splice(index, 1);
	}
};

/**
 * 获取城市列表
 * @param {Object} callback
 */
function getCity(callback) {
	var list = JSON.parse(provinceCity);
	var province = [];
	var city = [];
	var cityM = {};
	for(var i = 0; i < list.length; i++) {
		var obj = list[i];
		if(obj.deep == 1) {
			province.push(obj);
		} else if(obj.deep == 2) {
			city.push(obj);
		}
	}
	for(var i = 0; i < province.length; i++) {
		var array = [];
		array.push({
			'name': '全' + province[i].name,
			'id': province[i].id
		});
		for(var j = 0; j < city.length; j++) {
			if(city[j].parentId == i + 1) {
				array.push(city[j]);
				cityM['' + (i + 1)] = array;
			}
		}
	}
	callback(province, cityM);

	//	addLoading();
	//	$.ajax({
	//		type: "post",
	//		url: ip + '/webItem/allCity',
	//		async: false,
	//		data: {},
	//		success: function(data) {
	//			console.log(JSON.stringify(data.result));
	//			removeLoading();
	//			if(data.result_code != 1) {
	//				new Vue().$dialog.alert({
	//					mes: data.reason
	//				});
	//				return;
	//			}
	//			var list = data.result;
	//			var province = [];
	//			var city = [];
	//			var cityM = {};
	//			for(var i = 0; i < list.length; i++) {
	//				var obj = list[i];
	//				if(obj.deep == 1) {
	//					province.push(obj);
	//				} else if(obj.deep == 2) {
	//					city.push(obj);
	//				}
	//			}
	//			for(var i = 0; i < province.length; i++) {
	//				var array = [];
	//				array.push({
	//					'name': '全' + province[i].name,
	//					'id': province[i].id
	//				});
	//				for(var j = 0; j < city.length; j++) {
	//					if(city[j].parentId == i + 1) {
	//						array.push(city[j]);
	//						cityM['' + (i + 1)] = array;
	//					}
	//				}
	//			}
	//			callback(province, cityM);
	//		},
	//		error: function() {
	//			removeLoading();
	//			vm.$dialog.alert({
	//				mes: '服务器连接失败!'
	//			});
	//		}
	//	});
}

function getDicTable(async, classId, callback) {
	addLoading();
	$.ajax({
		type: "post",
		url: ip + '/webItem/ItemData',
		async: async,
		data: {
			classId: classId,
			requestToken: localStorage.accessToken,
			userId: localStorage.userId,
			openid: localStorage.openid
		},
		success: function(data) {
			removeLoading();
			if(data.result_code != 1) {
				myAlert(data.reason);
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			if(data.status == 510) {
				localStorage.clear();
				if(sign && wxsign) {
					wxAuthorization(window.location.href, function(data) {
						window.location.replace(data.result);
					})
					sign = false;
				}
				return;
			}
			myAlert('服务器连接失败');
		}
	});
}

//设备分类
function getClassifyTable(async, classType, callback) {
	addLoading();
	$.ajax({
		type: "post",
		url: ip + '/webItem/getCategoryList',
		async: async,
		data: {
			type: classType,
			requestToken: localStorage.accessToken,
			userId: localStorage.userId,
			openid: localStorage.openid
		},
		success: function(data) {
			removeLoading();
			if(data.result_code != 1) {
				myAlert(data.reason);
				return;
			}
			callback(data);
		},
		error: function(data) {
			removeLoading();
			if(data.status == 510) {
				localStorage.clear();
				if(sign && wxsign) {
					wxAuthorization(window.location.href, function(data) {
						window.location.replace(data.result);
					})
					sign = false;
				}
				return;
			}
			myAlert('服务器连接失败');
		}
	});
}

/**
 * 获取用户信息
 * @param {Object} userId
 * @param {Object} callback
 */
function getUserInfo(userId, callback) {
	if(userId) {
		post('/webUser/findUserMessage', {
			uid: userId
		}, function(data) {
			callback(data);
		})
	}
}

function wxAuthorization(url, callback) {
	post('/weixinCon/getAuthorizationUrlPc', {
		callbackUrl: url
	}, function(data) {
		callback(data);
	})
}

function log(str) {
	if(true) {
		console.log(str);
	}
}

function addressToLatlng(address, callback) {
	var geocoder = new qq.maps.Geocoder({
		complete: function(result) {
			callback(result.detail.location);
		}
	});
	geocoder.getLocation(address);
}

function isIPhone() {
	var u = navigator.userAgent;
	if(u.indexOf('iPhone') > -1) {
		return true;
	}
	return false;
}

function isWx() {
	var u = navigator.userAgent;
	if(u.indexOf('MicroMessenger') > -1) {
		return true;
	}
	return false;
}

/**
 * 图片压缩，默认同比例压缩
 * @param {Object} path
 *   pc端传入的路径可以为相对路径，但是在移动端上必须传入的路径是照相图片储存的绝对路径
 * @param {Object} obj
 *   obj 对象 有 width， height， quality(0-1)
 * @param {Object} callback
 *   回调函数有一个参数，base64的字符串数据
 */
function dealImage(path, obj, callback) {
	if(path.length < 1 * 1024 * 1024) {
		callback(path);
		return;
	}

	//	addLoading();

	setTimeout(function() {
		var img = new Image();
		img.src = path;
		img.onload = function() {
			var that = this;
			// 默认按比例压缩
			var w = that.width,
				h = that.height,
				scale = w / h;
			w = obj.width || w;
			h = obj.height || (w / scale);
			var quality = 0.7; // 默认图片质量为0.7
			//生成canvas
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			// 创建属性节点
			var anw = document.createAttribute("width");
			anw.nodeValue = w;
			var anh = document.createAttribute("height");
			anh.nodeValue = h;
			canvas.setAttributeNode(anw);
			canvas.setAttributeNode(anh);
			ctx.drawImage(that, 0, 0, w, h);
			// 图像质量
			if(obj.quality && obj.quality <= 1 && obj.quality > 0) {
				quality = obj.quality;
			}
			// quality值越小，所绘制出的图像越模糊
			var base64 = canvas.toDataURL('image/jpeg', quality);

			if(base64.length > 1 * 1024 * 1024) {
				dealImage(base64, {
					quality: 0.1
				}, callback);
			} else {
				//				removeLoading();
				callback(base64);
			}
		}
	})
}

function getAvatar(url) {
	if(url) {
		if(url.indexOf('http') >= 0) {
			return url;
		} else {
			return ip + url;
		}
	}
}

function addLoading() {
	if($('#loading11111').html()) {
		return;
	}

	$('body').append('<div id="loading11111" style="width: 100%;height: 100%;position: fixed;top: 0;z-index: 1000;display: flex;">' +
		'<div style="margin: auto;padding: 20px; text-align: center;background: rgba(0, 0, 0, 0.5);border-radius: 10px;">' +
		'<div class="load-1" style="height: 55px;">' +
		'<div class="k-line k-line3-1"></div>' +
		'<div class="k-line k-line3-2"></div>' +
		'<div class="k-line k-line3-3"></div>' +
		'<div class="k-line k-line3-4"></div>' +
		'<div class="k-line k-line3-5"></div>' +
		'</div>' +
		'<span style="color: white;text-align: center;">正在加载</span>' +
		'</div>' +
		'</div>');
}

function removeLoading() {
	$('#loading11111').remove();
}

function myAlert(str) {
	if($('#alert11111').html()) {
		return;
	}
	if(!str) {
		return;
	}
	$('body').append('<div id="alert11111" style="width: 100%;height: 100%;position: fixed;top: 0;z-index: 1000;display: flex;">' +
		'<div style="margin: auto;padding: 20px; text-align: center;background: rgba(0, 0, 0, 0.8);border-radius: 10px;color: white;">' +
		'<div style="max-width: 500px;min-width: 200px;font-size:16px; word-wrap: break-word;overflow: auto;max-height: 500px;">' + str + '</div>' +
		'<div style="height: 1px;background: white;margin-top: 20px;"></div>' +
		'<div style="cursor: pointer;padding-top: 20px;font-weight: bold;font-size: 16px;" onclick="$(this).parent().parent().remove()">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>' +
		'</div>' +
		'</div>');
}

function feedback() {
	$('body').append('<div id="feedback11111" style="width: 100%;height: 100%;background: rgba(0, 0, 0, 0.8);position: fixed;top: 0;z-index: 1000;display: flex;">' +
		'<div style="width: 600px;height: 350px;margin: auto; background-color: white; box-shadow: rgb(204, 204, 204) 1px 1px 8px 0px;">' +
		'<div style="margin: 30px 20px 30px 20px;">' +
		'<div style="display: flex; align-items: center;margin-bottom: 10px;">' +
		'<span style="font-size: 16px;font-weight: bold;">意见反馈</span>' +
		'</div>' +
		'<textarea id="feedback_content_11111" style="margin-top: 10px;width: 100%;height: 180px;resize: none;font-size: 16px;line-height: 30px;padding: 10px;box-sizing: border-box;color: #998a8a;font-family: microsoft yahei;" placeholder="请填写您宝贵的建议"></textarea>' +
		'</div>' +
		'<div style="margin-right: 20px;">' +
		'<span class="cursor-pointer" style="width: 100px; height: 30px; line-height: 30px; text-align: center; background-color: #097ed8; color: white; border-radius: 5px; margin-left: 20px;float: right;" onclick="confirmFankui()">确认反馈</span>' +
		'<span class="cursor-pointer" style="width: 100px; height: 30px; line-height: 30px; text-align: center; background-color: gray; color: white; border-radius: 5px;float: right;" onclick="$(this).parent().parent().parent().remove()">取消</span>' +
		'</div>' +
		'</div>' +
		'</div>')
}

function confirmFankui() {
	var content = $('#feedback_content_11111').val();

	if(content == '') {
		myAlert('请填写您的建议')
		return
	}
	post('/webUser/Feedback', {
		userId: localStorage.userId,
		content: content,
		//		img: vm.imgs
	}, function(data) {
		$('#feedback11111').remove();
		myAlert('感谢您的支持和理解我们会尽快对信息进行核实与处理');
	})
}

function getChat(userInfo, toId) {
	if(userInfo.regStatus != 1) {
		window.location.href = '../register/register.html';
		return;
	}

	$('body').append('<div id="chat11111" hidden style="width: 100%;height: 100%;background: rgba(0, 0, 0, 0.8);position: fixed;top: 0;z-index: 1000;display: flex;">' +
		'<div style="width: 600px;height: 450px;margin: auto; background-color: white; padding: 10px; box-shadow: rgb(204, 204, 204) 1px 1px 8px 0px;">' +
		'<ul id="chatContent11111" style="list-style: none;margin: 0;padding: 0;height: 300px;overflow: auto;">' +
		'<li v-for="item in chatlist">' +
		'<div style="text-align: center;margin-top: 5px;">{{item.strCreatedAt}}</div>' +
		'<div v-if="item.fromUid!=localStorage.userId" style="display: inline-flex;">' +
		'<img :src="item.toTouxiang?getAvatar(item.toTouxiang):\'../static/img/avatar_96x96.png\'" style="width: 40px;height: 40px;border-radius: 8px;" />' +
		'<div style="margin-left: 10px;">' +
		'<div style="font-size: 14px;">{{item.nickName}}</div>' +
		'<div style="display: inline-flex;position: relative;color: white;">' +
		'<div style="border-left: 8px solid transparent;content: \'\';width: 0;height: 0;border-top: 12px solid #0088CC;margin-top: 15px;"></div>' +
		'<div style="margin-top: 5px;background-color: #0088CC;border-radius: 10px;padding: 8px;max-width: 300px;min-height: 20px;" v-html="strReplace(decodeURI(item.messageContent))"></div>' +
		'</div>' +
		'</div>' +
		'</div>' +
		'<div v-else style="display: inline-flex;float: right;">' +
		'<div style="margin-right: 10px;">' +
		'<div style="font-size: 14px;float: right;">{{userInfo.orgName}}</div>' +
		'<div style="clear: both;"></div>' +
		'<div style="display: inline-flex;position: relative;color: white;">' +
		'<div style="margin-top: 5px;background-color: #128A28;border-radius: 10px;padding: 8px;max-width: 300px;min-height: 20px;" v-html="strReplace(decodeURI(item.messageContent))"></div>' +
		'<div style="border-right: 8px solid transparent;content: \'\';width: 0;height: 0;border-top: 12px solid #128A28;margin-top: 15px;"></div>' +
		'</div>' +
		'</div>' +
		'<img :src="userInfo.touxiang?getAvatar(userInfo.touxiang):\'../static/img/avatar_96x96.png\'" style="width: 40px;height: 40px;border-radius: 8px;" />' +
		'</div>' +
		'<div style="clear: both;"></div>' +
		'</li>' +
		'</ul>' +
		'<textarea @keydown="keydown()" @keyup="keyup()" v-model="content" style="color:black;width: 100%;height: 80px;resize: none;box-sizing: border-box;padding: 8px;font-size: 16px;line-height: 20px;margin-top: 10px;margin-bottom: 5px;"></textarea>' +
		'<div id="sendChat11111" class="cursor-pointer" @click="sendChat()" style="float: right;background: lightgray;width: 60px;height: 25px;line-height: 25px;text-align: center;font-size: 15px;margin-left: 10px;" onmouseenter="this.style.cssText=\'float: right;width: 60px;height: 25px;line-height: 25px;text-align: center;background: #128A28;color: white;font-size: 15px;margin-left: 10px;\'" onmouseleave="this.style.cssText=\'float: right;background: lightgray;width: 60px;height: 25px;line-height: 25px;text-align: center;font-size: 15px;margin-left: 10px;\'">发送</div>' +
		'<div onclick="$(this).parent().parent().remove()" class="cursor-pointer" style="float: right;background: lightgray;width: 60px;height: 25px;line-height: 25px;text-align: center;font-size: 15px;">关闭</div>' +
		'</div>' +
		'</div>')

	var vm = new Vue({
		el: '#chat11111',
		data: {
			userInfo: userInfo,
			chatlist: [],
			content: '',
			isEnt: false,
			isCtrl: false
		},
		methods: {
			sendChat: function() {
				if(!vm.content) {
					myAlert('内容不能为空');
					return;
				}
				post('/webUser/mySendMessage', {
					fromUid: localStorage.userId,
					toUid: toId,
					messageContent: encodeURI(vm.content)
				}, function(data) {
					var src = '';
					if(vm.userInfo.touxiang) {
						src = getAvatar(vm.userInfo.touxiang);
					} else {
						src = '../static/img/avatar_96x96.png';
					}
					$('#chatContent11111').append('<div style="display: inline-flex;float: right;margin-top: 5px;">' +
						'<div style="margin-right: 10px;">' +
						'<div style="font-size: 14px;float: right;">' + vm.userInfo.orgName + '</div>' +
						'<div style="clear: both;"></div>' +
						'<div style="display: inline-flex;position: relative;color: white;">' +
						'<div style="margin-top: 5px;background-color: #128A28;border-radius: 10px;padding: 8px;max-width: 300px;min-height: 20px;">' + strReplace(vm.content) + '</div>' +
						'<div style="border-right: 8px solid transparent;content: \'\';width: 0;height: 0;border-top: 12px solid #128A28;margin-top: 15px;"></div>' +
						'</div>' +
						'</div>' +
						'<img src="' + src + '" style="width: 40px;height: 40px;border-radius: 8px;" />' +
						'</div>' +
						'<div style="clear: both;"></div>');
					vm.content = '';
					$('#chatContent11111').scrollTop($('#chatContent11111')[0].scrollHeight);
				})
			},
			keydown: function() {
				var code = event.keyCode || event.which || event.charCode;
				if(code == 13) {
					vm.isEnt = true;
				}
				if(code == 17) {
					vm.isCtrl = true;
				}
				if(vm.isCtrl && vm.isEnt) {
					vm.content += '\n';
					return;
				}
				if(vm.isEnt) {
					event.returnValue = false;
					event.cancel = true;
					$('#sendChat11111').click();
				}
			},
			keyup: function() {
				if(event.keyCode == 13) {
					vm.isEnt = false;
				}
				if(event.keyCode == 17) {
					vm.isCtrl = false;
				}
			}
		}
	})

	post('/webUser/myAllMessage', {
		userId: localStorage.userId,
		toId: toId
	}, function(data) {
		vm.chatlist = data.result;
		setTimeout(function() {
			$('#chatContent11111').scrollTop($('#chatContent11111')[0].scrollHeight);
		}, 300);
	})
}

function initMeassage(userInfo) {
	$(function() {
		$('body').append('<div id="message111111" style="position: fixed;bottom: 50px;right: 10px;">' +
			'<div style="position: relative;">' +
			'<img style="width: 40px;height: 40px;cursor: pointer;" :src="getDir()+\'img/ic_message.png\'" @click="$(\'#msgdetail111\').show();getMsg();" />' +
			'<div v-if="xiaoxi" style="width: 10px;height: 10px;background: red;border-radius: 100px;position: absolute;top: 0;left: 0;"></div>' +
			'</div>' +
			'<div id="msgdetail111" hidden>' +
			'<div onclick="$(\'#msgdetail111\').hide()" style="cursor: pointer;background: white;position: fixed;right: 0;bottom: 400px;width: 600px;height: 28px;text-align: right;line-height: 28px;font-size: 15px;border: 1px solid lightgray;">关闭&nbsp;&nbsp;</div>' +
			'<div style="width: 600px;height: 400px;position: fixed;right: 0;bottom: 0;display: inline-flex;border: 1px solid lightgray;background: white;">' +
			'<div style="width: 200px;height: 100%;">' +
			'<ul style="list-style: none;margin: 0;padding: 0;">' +
			'<li v-if="systemMessage" onclick="$(this).addClass(\'select-bg\').siblings(\'li\').removeClass(\'select-bg\');" @click="systemMessage.read=1;chat(1,\'\')" style="padding: 8px;position: relative;display: inline-flex;box-sizing: border-box;width: 100%;cursor: pointer;" onmouseenter="$($(this).children()[3]).show();" onmouseleave="$($(this).children()[3]).hide()">' +
			'<img :src="getDir()+\'static/img/Group@2x.png\'" style="width: 45px;height: 45px;border-radius: 8px;" />' +
			'<div style="width: 130px;margin-left: 8px;font-size: 15px;line-height: 22px;">' +
			'<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100px;">系统通知</div>' +
			'<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100%;color: gray;">{{decodeURI(systemMessage.messageContent)}}</div>' +
			'</div>' +
			'<div v-show="systemMessage.read==0" style="width: 10px;height: 10px;background: red;border-radius: 50px;position: absolute;left: 5px;top: 5px;"></div>' +
			'<img hidden id="system111" @click="deleteMessage(1, systemMessage.fromUid==localStorage.userId?systemMessage.toUid:systemMessage.fromUid)" :src="getDir()+\'static/img/9E9E7268-4F63-4B93-8850-DFF862172AEA@2x.png\'" style="width: 15px;height: 15px;position: absolute;right: 8px;display: none;" />' +
			'</li>' +
			'<li v-for="item in chatMessage" onclick="$(this).addClass(\'select-bg\').siblings(\'li\').removeClass(\'select-bg\');" @click="item.read=1;chat(2,item.fromUid==localStorage.userId?item.toUid:item.fromUid)" style="cursor: pointer;padding: 8px;position: relative;display: inline-flex;box-sizing: border-box;width: 100%;" onmouseenter="$($(this).children()[3]).show();" onmouseleave="$($(this).children()[3]).hide()">' +
			'<img :src="item.toTouxiang?getAvatar(item.toTouxiang):getDir()+\'static/img/avatar_96x96.png\'" style="width: 45px;height: 45px;border-radius: 8px;" />' +
			'<div style="width: 130px;margin-left: 8px;font-size: 15px;line-height: 22px;">' +
			'<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100px;">{{item.nickName}}</div>' +
			'<div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 100%;color: gray;">{{decodeURI(item.messageContent)}}</div>' +
			'</div>' +
			'<div v-show="item.fromUid!=localStorage.userId&&item.read==0" style="width: 10px;height: 10px;background: red;border-radius: 50px;position: absolute;left: 5px;top: 5px;"></div>' +
			'<img hidden :id="item.fromUid==localStorage.userId?item.toUid:item.fromUid" @click="deleteMessage(2, item.fromUid==localStorage.userId?item.toUid:item.fromUid)" :src="getDir()+\'static/img/9E9E7268-4F63-4B93-8850-DFF862172AEA@2x.png\'" style="width: 15px;height: 15px;position: absolute;right: 8px;display: none;" />' +
			'</li>' +
			'</ul>' +
			'</div>' +
			'<div style="width: 1px;background: lightgray;"></div>' +
			'<div hidden id="chatdetail1212" style="width: 400px;height: 100%;">' +
			'<ul id="chatcontent1212" style="list-style: none;margin: 0;padding: 0;overflow: auto;height: 270px;">' +
			'<li v-for="item in chatlist" style="padding: 8px;box-sizing: border-box;width: 100%;">' +
			'<div style="text-align: center;margin-top: 5px;">{{item.strCreatedAt}}</div>' +
			'<div v-if="item.fromUid!=localStorage.userId" style="display: inline-flex;">' +
			'<img :src="item.toTouxiang?getAvatar(item.toTouxiang):getDir()+\'static/img/avatar_96x96.png\'" style="width: 40px;height: 40px;border-radius: 8px;" />' +
			'<div style="margin-left: 10px;">' +
			'<div style="font-size: 14px;">{{item.nickName}}</div>' +
			'<div style="display: inline-flex;position: relative;color: white;">' +
			'<div style="border-left: 8px solid transparent;content: \'\';width: 0;height: 0;border-top: 12px solid #0088CC;margin-top: 15px;"></div>' +
			'<div style="margin-top: 5px;background-color: #0088CC;border-radius: 10px;padding: 8px;max-width: 200px;min-height: 20px;" v-html="strReplace(decodeURI(item.messageContent))"></div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div v-else style="display: inline-flex;float: right;">' +
			'<div style="margin-right: 10px;">' +
			'<div style="font-size: 14px;float: right;">{{userInfo.orgName}}</div>' +
			'<div style="clear: both;"></div>' +
			'<div style="display: inline-flex;position: relative;color: white;">' +
			'<div style="margin-top: 5px;background-color: #128A28;border-radius: 10px;padding: 8px;max-width: 200px;min-height: 20px;" v-html="strReplace(decodeURI(item.messageContent))"></div>' +
			'<div style="border-right: 8px solid transparent;content: \'\';width: 0;height: 0;border-top: 12px solid #128A28;margin-top: 15px;"></div>' +
			'</div>' +
			'</div>' +
			'<img :src="userInfo.touxiang?getAvatar(userInfo.touxiang):getDir()+\'static/img/avatar_96x96.png\'" style="width: 40px;height: 40px;border-radius: 8px;" />' +
			'</div>' +
			'<div style="clear: both;"></div>' +
			'</li>' +
			'</ul>' +
			'<textarea @keydown="keydown()" @keyup="keyup()" v-model="content" style="color:black;width: 100%;height: 80px;resize: none;box-sizing: border-box;padding: 8px;font-size: 16px;line-height: 20px;margin-top: 10px;margin-bottom: 5px;border: none;border-top: 1px solid lightgray;border-bottom: 1px solid lightgray;"></textarea>' +
			'<div id="sendChat1212" @click="sendChat()" style="float: right;background: lightgray;width: 60px;height: 25px;line-height: 25px;text-align: center;font-size: 15px;margin-right: 10px;" onmouseenter="this.style.cssText=\'cursor: pointer;float: right;width: 60px;height: 25px;line-height: 25px;text-align: center;background: #128A28;color: white;font-size: 15px;margin-right: 10px;\'" onmouseleave="this.style.cssText=\'float: right;background: lightgray;width: 60px;height: 25px;line-height: 25px;text-align: center;font-size: 15px;margin-right: 10px;\'">发送</div>' +
			'</div>' +
			'<div hidden id="sysdetail1212" style="width: 400px;height: 100%;">' +
			'<ul id="syscontent1212" style="list-style: none;margin: 0;padding: 0;height: 100%;;overflow: auto;">' +
			'<li v-for="item in sysmsglist" style="padding: 8px;box-sizing: border-box;width: 100%;align-items: center;display: flex;flex-direction: column;">' +
			'<div style="text-align: center;">{{item.strCreatedAt}}</div>' +
			'<div style="width: 80%;background: lightgray;padding: 8px;text-align: center;color: white;border-radius: 5px;font-weight: bold;" v-html="item.pcmessage"></div>' +
			'</li>' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>')

		var vm = new Vue({
			el: '#message111111',
			data: {
				userInfo: userInfo,
				msg_empty: false,
				systemMessage: '',
				chatMessage: [],
				chatlist: [],
				sysmsglist: [],
				content: '',
				isEnt: false,
				isCtrl: false,
				toId: '',
				xiaoxi: false
			},
			methods: {
				keydown: function() {
					var code = event.keyCode || event.which || event.charCode;
					if(code == 13) {
						vm.isEnt = true;
					}
					if(code == 17) {
						vm.isCtrl = true;
					}
					if(vm.isCtrl && vm.isEnt) {
						vm.content += '\n';
						return;
					}
					if(vm.isEnt) {
						event.returnValue = false;
						event.cancel = true;
						$('#sendChat1212').click();
					}
				},
				keyup: function() {
					if(event.keyCode == 13) {
						vm.isEnt = false;
					}
					if(event.keyCode == 17) {
						vm.isCtrl = false;
					}
				},
				getMsg: function() {
					vm.xiaoxi = false;
					post('/webUser/myMessage', {
						userId: localStorage.userId
					}, function(data) {
						vm.systemMessage = data.result.Message;
						vm.chatMessage = data.result.ChatList;
					})
				},
				chat: function(type, toId) {
					vm.toId = toId;
					if(type == 1) {
						$('#chatdetail1212').hide();
						post('/webUser/myAllSystemMessage', {
							userId: localStorage.userId
						}, function(data) {
							$('#sysdetail1212').show();
							vm.sysmsglist = data.result
							setTimeout(function() {
								$('#syscontent1212').scrollTop($('#syscontent1212')[0].scrollHeight);
							}, 500);
						})
					} else {
						$('#sysdetail1212').hide();
						post('/webUser/myAllMessage', {
							userId: localStorage.userId,
							toId: toId
						}, function(data) {
							$('#chatdetail1212').show();
							vm.chatlist = data.result;
							setTimeout(function() {
								$('#chatcontent1212').scrollTop($('#chatcontent1212')[0].scrollHeight);
							}, 500);
						})
					}
				},
				deleteMessage: function(type, id) {
					event.stopPropagation();
					if(confirm("确定要删除吗?")) {
						post('/webUser/deleteMessage', {
							fromId: id,
							toId: localStorage.userId,
							messageType: type
						}, function(data) {
							if(type == 1) {
								$('#system111').parent().remove();
							} else {
								$('#' + id).parent().remove();
							}
						})
					}
				},
				sendChat: function() {
					if(!vm.content) {
						myAlert('内容不能为空');
						return;
					}
					post('/webUser/mySendMessage', {
						fromUid: localStorage.userId,
						toUid: vm.toId,
						messageContent: encodeURI(vm.content)
					}, function(data) {
						var src = '';
						if(vm.userInfo.touxiang) {
							src = getAvatar(vm.userInfo.touxiang);
						} else {
							src = getDir() + 'static/img/avatar_96x96.png';
						}
						$('#chatcontent1212').append('<div style="display: inline-flex;float: right;">' +
							'<div style="margin-right: 10px;">' +
							'<div style="font-size: 14px;float: right;">' + vm.userInfo.orgName + '</div>' +
							'<div style="clear: both;"></div>' +
							'<div style="display: inline-flex;position: relative;color: white;">' +
							'<div style="margin-top: 5px;background-color: #128A28;border-radius: 10px;padding: 8px;max-width: 200px;min-height: 20px;">' + strReplace(vm.content) + '</div>' +
							'<div style="border-right: 8px solid transparent;content: \'\';width: 0;height: 0;border-top: 12px solid #128A28;margin-top: 15px;"></div>' +
							'</div>' +
							'</div>' +
							'<img src="' + src + '" style="width: 40px;height: 40px;border-radius: 8px;" />' +
							'</div>' +
							'<div style="clear: both;"></div>');
						vm.content = '';
						$('#chatcontent1212').scrollTop($('#chatcontent1212')[0].scrollHeight);
					})
				}
			}
		})

		post('/webUser/allNotReadMessage', {
			userId: localStorage.userId
		}, function(data) {
			vm.xiaoxi = data.result ? true : false;
		})
	})
}

function getDir() {
	if(window.location.href.indexOf('index.html') > 0) {
		return '';
	} else {
		return '../';
	}
}

function personinfoview(name, imgurl, telephone, type) {
	$('body').append(
		'<div onmouseenter="showdetail()" onmouseleave="hidedetail()">' +
		'<div style="background: #689fee;height: 50px;width: 200px;z-index: 99999;position: fixed;right: 0px;top: 0px;margin-right: 0px;display: flex;float: left;">' +
		'<div style="background: white; width: 36px;height: 36px;margin: 0px;margin-top: 7px;margin-left: 30px;border-radius: 18px;"><img style="margin: 0px;width: 36px;height: 36px;border-radius: 18px;" id="logocompany" src="' + ip + imgurl + '" alt="" /></div>' +
		'<div style="padding-left: 10px;margin-top: 7px;line-height: 36px;height: 36px;font-size: 15px;color: white;"><nobr>' + name + '</nobr></div>' +
		'</div>' +

		'<div id="infodetaildiv" style="z-index: 99999;background: white;top: 50px;right:0px;margin-right: 0px;width: 200px;position: fixed;" hidden>' +
		'<div style="width: 200px;text-align: center;margin: 10px;font-size: 14px;color: gray;">手机号码：' + telephone + '</div>' +
		'<div id="changeinfoheadimg" style="width: 200px;text-align: center;margin: 10px;" hidden><a style="color:#689fee;" href="javascript:changeinfoheadimg()">修改图像</a></div>' +
		'<input id="changeinfoheadimginput" class="fr compile-pic" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" hidden="true" onchange="changeinfoheadimgact(this)">' +
		'<div style="width: 200px;text-align: center;margin: 10px;"><a style="color:#689fee;" href="javascript:addressfun(' + type + ')">编辑信息</a></div>' +
		'</div>' +
		'</div>'
	);
	if(type == 2) {
		$('#changeinfoheadimg').hide();
	} else {
		$('#changeinfoheadimg').show();
	}
}

function showdetail() {
	$('#infodetaildiv').show();
}

function hidedetail() {
	$('#infodetaildiv').hide();
}

function addressfun(type) {
	var href1 = '../publish/jianlifabu.html';
	var href2 = '../register/companyregister.html?id=id';
	var urlStr = window.location.href;
	if(urlStr.indexOf('index.html') > 0) {
		href1 = 'publish/jianlifabu.html';
		href2 = 'register/companyregister.html?id=id';
	}
	if(type == 1) {
		window.open(href1);
	} else if(type == 2) {
		window.open(href2);
	}
}

function changeinfoheadimg() {
	$('#changeinfoheadimginput').click();
}

function changeinfoheadimgact(input) {
	var files = input.files;
	var file = files[0];
	var imageType = /^image\//;
	if(!imageType.test(file.type)) {
		alert("请选择图片类型上传");
		return;
	}

	var Orientation = null;
	//获取照片方向角属性，用户旋转控制  
	EXIF.getData(file, function() {
		EXIF.getAllTags(this);
		Orientation = EXIF.getTag(this, 'Orientation');
	});

	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function(e) {

		dealImage(e.target.result, {
			quality: 0.1
		}, function(value) {

			managerotateImg(value, Orientation, function(base64) {
				$('#logocompany').attr('src', base64);
				post('/webUser/changeMyTouxiang', {
						'userId': localStorage.userId,
						'img': base64
					},
					function(data) {
						if(data.result_code == 1) {
							myAlert("修改成功！");
							window.location.reload();
						} else {
							myAlert("修改失败，请重试！");
							window.location.reload();
						}
					})
			})

		});
	};
}

function managerotateImg(value, Orientation, callback) {
	var image = new Image();
	image.src = value;
	image.onload = function() {
		var expectWidth = this.naturalWidth;
		var expectHeight = this.naturalHeight;

		if(this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
			expectWidth = 800;
			expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
		} else if(this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
			expectHeight = 1200;
			expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
		}
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		canvas.width = expectWidth;
		canvas.height = expectHeight;
		ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
		var base64 = null;

		if(Orientation != "" && Orientation != 1) {
			//alert('旋转处理');  
			switch(Orientation) {
				case 6: //需要顺时针（向左）90度旋转  
					rotateImg(this, 'left', canvas);
					break;
				case 8: //需要逆时针（向右）90度旋转  
					rotateImg(this, 'right', canvas);
					break;
				case 3: //需要180度旋转  
					rotateImg(this, 'right', canvas); //转两次  
					rotateImg(this, 'right', canvas);
					break;
			}
		}

		base64 = canvas.toDataURL("image/jpeg", 0.8);
		callback(base64);
	}
}

//对图片旋转处理 added by lzk  
function rotateImg(img, direction, canvas) { //alert(img);  
	//最小与最大旋转方向，图片旋转4次后回到原方向    
	var min_step = 0;
	var max_step = 3;
	//var img = document.getElementById(pid);    
	if(img == null) return;
	//img的高度和宽度不能在img元素隐藏后获取，否则会出错    
	var height = img.height;
	var width = img.width;
	//var step = img.getAttribute('step');    
	var step = 2;
	if(step == null) {
		step = min_step;
	}
	if(direction == 'right') {
		step++;
		//旋转到原位置，即超过最大值    
		step > max_step && (step = min_step);
	} else {
		step--;
		step < min_step && (step = max_step);
	}
	//img.setAttribute('step', step);    
	/*var canvas = document.getElementById('pic_' + pid);   
	if (canvas == null) {   
	    img.style.display = 'none';   
	    canvas = document.createElement('canvas');   
	    canvas.setAttribute('id', 'pic_' + pid);   
	    img.parentNode.appendChild(canvas);   
	}  */
	//旋转角度以弧度值为参数    
	var degree = step * 90 * Math.PI / 180;
	var ctx = canvas.getContext('2d');
	switch(step) {
		case 0:
			canvas.width = width;
			canvas.height = height;
			ctx.drawImage(img, 0, 0);
			break;
		case 1:
			canvas.width = height;
			canvas.height = width;
			ctx.rotate(degree);
			ctx.drawImage(img, 0, -height);
			break;
		case 2:
			canvas.width = width;
			canvas.height = height;
			ctx.rotate(degree);
			ctx.drawImage(img, -width, -height);
			break;
		case 3:
			canvas.width = height;
			canvas.height = width;
			ctx.rotate(degree);
			ctx.drawImage(img, -width, 0);
			break;
	}
}

getUserInfo(localStorage.userId, function(data) {
	var urlStr = window.location.href;
	if(urlStr.indexOf('companyregister.html') > 0 || urlStr.indexOf('register.html') > 0) {
		return
	}

	initMeassage(data.result);

	if(urlStr.indexOf('index.html') > 0 ||
		urlStr.indexOf('zixundetail.html') > 0 ||
		urlStr.indexOf('zixunlist.html') > 0 ||
		urlStr.indexOf('zhaopindetail.html') > 0 ||
		urlStr.indexOf('zhaopinlist.html') > 0 ||
		urlStr.indexOf('zhaobiaodetail.html') > 0 ||
		urlStr.indexOf('zhaobiaolist.html') > 0 ||
		urlStr.indexOf('qiuzhidetail.html') > 0 ||
		urlStr.indexOf('qiuzhilist.html') > 0 ||
		urlStr.indexOf('gongyingdetail.html') > 0 ||
		urlStr.indexOf('gongyinglist.html') > 0 ||
		urlStr.indexOf('stpc.tongtongww.com/?code=') > 0) {} else {
		if(data.result.regStatus != 1) {
			window.location.href = "../register/register.html";
			return;
		} else {
			if(data.result.type == 2) {
				if(data.result.regist == 0) {
					window.location.href = "../register/companyregister.html";
					return;
				} else {
					if(data.result.expire == 0) {
						alert("您的注册申请正在审核中,审核通过后会有消息提醒");
						window.location.href = "../index.html";
						return;
					}
				}
			}
		}
	}

	if(data.result.orgName) {
		personinfoview(data.result.orgName, data.result.touxiang, data.result.telephone, data.result.type);
	}
})