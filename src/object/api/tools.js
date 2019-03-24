/**
 * 截取url中参数，返回对象
 */
export const getQueryString = () => {
  if(location.href.indexOf('?') !== -1){
    const url = location.href.split('?')[1];
    let query = '';
    if(url.indexOf('#') !== -1){
      query = url.split('#')[0].split('&');
    } else {
      query = url.split('&');
    }
    let queryParams = {};
    query.forEach(v =>{
      let attr = v.split('=')[0];
      queryParams[attr] = v.split('=')[1];
    });
    return queryParams;
  } else {
    return 'error: url参数为空'
  }
};
/**
 * 获取滚动条距离顶部高度
 */

// export const getScrollTop = () =>{     
//   var scrollTop = 0;     
//   if(document.documentElement&&document.documentElement.scrollTop){     
//       scrollTop=document.documentElement.scrollTop;     
//   }else if(document.body){     
//       scrollTop=document.body.scrollTop;     
//   }     
//   return scrollTop;     
// } 

/**
 * 替换url某个参数
 * @param {string}  key 要替换的属性键
 * @param {string}  value 要替换的属性值
 */
export const replaceQueryString = (key, value) => {
  let obj = getQueryString();
  let arr = [];
  if(key in obj){
    obj[key] = value;
    for(let i in obj){
      arr.push(
        i + '=' + obj[i]
      );
    }
    return arr.join('&');
  } else {
    return 'error: url参数没有此属性';
  }
}

// /**
//  * 数字递增动画
//  * @param {数字递增参数} options 
//  */
// export const numAutoPlusAnimation = (num) =>{
//   let time = 1000; //总时间--毫秒为单位
//   let finalNum = num; //要显示的真实数值
//   let regulator = 30; //调速器，改变regulator的数值可以调节数字改变的速度
//   let step = finalNum / (time / regulator);/*每30ms增加的数值--*/
//   let count = 0; //计数器
//   let initial = 0;
//   let timer = setInterval(() => {
//     count = count + step;
//     if(count >= finalNum) {
//       clearInterval(timer);
//       count = finalNum;
//     }
//     let t = Math.floor(count);
//     if(t == initial) return;
//     initial = t;
//     // num = initial;
//   }, 30);
// }

/**
 * base64转blob对象
 * @param {string} baseUrl 需要转换的base64
 */
export const base64toBlob = baseUrl => {
  let arr = baseUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

/**
 * 文件转base64
 * @param {object} file 文件对象，返回Promise
 */
export const fileToBase64 = file => {
  return new Promise(resolve =>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = e => resolve(e.target.result);
  });
};

/**
 * B转换KB、MB、GB
 * @param {number} limit 需要转化的数据
 */
export const conver = limit => {
  let size = '';
  if ( limit < 0.1 * 1024 ){
    size = limit.toFixed(2) + 'B';
  } else if (limit < 0.1 * 1024 * 1024 ){
    size = (limit / 1024).toFixed(2) + 'KB';
  } else if (limit < 0.1 * 1024 * 1024 * 1024){
    size = (limit / (1024 * 1024)).toFixed(2) + 'MB';
  } else {
    size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
  }
  let sizestr = size + '';
  let len = sizestr.indexOf('.');
  let dec = sizestr.substr(len + 1, 2);
  if(dec == '00'){
    return sizestr.substring(0,len) + sizestr.substr(len + 3, 2);
  }
  return sizestr;
};

/**
 * 判断对象的数据类型
 * @param {type} o 需要判断的数据，返回 Null Undefined Object Array
 */
export const isClass = o => {
  if (o === null) return 'Null';
  if (o === undefined) return 'Undefined';
  return Object.prototype.toString.call(o).slice(8, -1);
};

/**
 * 深度拷贝
 * @param {object} obj 需要拷贝的对象
 */
export const deepClone = obj => {
  let result;
  const oClass = isClass(obj);
  if (oClass === 'Object') {
    result = {};
  } else if (oClass === 'Array') {
    result = [];
  } else {
    return obj;
  }
  for (const key in obj) {
    const copy = obj[key];
    if (isClass(copy) === 'Object') {
      result[key] = deepClone(copy);// 递归调用
    } else if (isClass(copy) === 'Array') {
      result[key] = deepClone(copy);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

/**
 * 格式化日期
 * @param {Date} date Date对象
 * @param {string} fmt 返回格式 'yyyy-MM-dd HH:mm:ss SSS q'
 */
export const formatDateByDate = (date, fmt = 'yyyy-MM-dd HH:mm:ss') => {
  if (date instanceof Date) {
    let format = fmt;
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'H+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    Object.entries(o).forEach(([key, val]) => {
      if (new RegExp(`(${key})`).test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? val : `00${val}`.substr(`${val}`.length));
      }
    });
    return format;
  }
  return date;
};

/**
 * 格式化时间戳
 * @param {number} stamp 时间戳
 * @param {type} fmt 返回格式 'yy-MM-dd HH:mm'
 */
export const formatDate = (stamp, fmt = 'yy-MM-dd HH:mm') => {
  if (!stamp) {
    return '';
  }
  const date = new Date(+stamp * 1000);
  const resTime = formatDateByDate(date, fmt);
  return resTime;
};

/**
 * 获取时间戳到当前还有多少天
 * @param {number} times 时间戳
 * @param {boolean} abs 是否取绝对值
 */
export const deadTime = (times, abs) => {
  if (!times) {
    return '';
  }
  const s = times - (Date.now() / 1000);
  let d = Math.floor(s / 3600 / 24, 10);
  if (abs) {
    d = Math.abs(d);
  }
  return d;
};

/**
 * 格式化时间为文字描述
 * @param {*} time 时间参数
 */
export const formatTime = time => {
  let date = new Date(time).getTime();
  let initDate = new Date().getTime();
  let minute = (initDate - date) / 1000 / 60;//半小时以内
  if (minute < 60) {
    return Math.ceil(minute) + '分钟前';
  }
  let hour = minute / 60;
  if (1 < hour && hour < 24) {
    return Math.ceil(hour) + '小时前';
  }
  let day = minute / 60 / 24;
  if (1 <= day && day < 2) {
    return '一天前'
  }
  return time.split(' ')[0];
};

/**
 * 获取当前手机系统   _getSystem().versions().**  返回布尔值
 */
export const _getSystem = () => {
  return {
    versions: () => {
      var u = navigator.userAgent;
      // app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1,   /*IE内核*/
        presto: u.indexOf('Presto') > -1,     /*opera内核*/
        webKit: u.indexOf('AppleWebKit') > -1, /*苹果、谷歌内核*/
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,    /*火狐内核*/
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),    /*是否为移动终端*/
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /*ios终端*/
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, /*android终端或者uc浏览器*/
        iPhone: u.indexOf('iPhone') > -1,      /*是否为iPhone或者QQHD浏览器*/
        iPad: u.indexOf('iPad') > -1,   /*是否iPad*/
        webApp: u.indexOf('Safari') == -1,     /*是否web应该程序，没有头部与底部*/
        souyue: u.indexOf('souyue') > -1,
        superapp: u.indexOf('superapp') > -1,
        weixin:u.toLowerCase().indexOf('micromessenger') > -1,
        Safari:u.indexOf('Safari') > -1
      };
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };
}


function encodeUTF8(s) {
  var i, r = [], c, x;
  for (i = 0; i < s.length; i++)
    if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
    else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
    else {
      if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
        c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
          r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
      else r.push(0xE0 + (c >> 12 & 0xF));
      r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
    };
  return r;
}

// SHA1加密算法
export const SHA1 = s => {
  var data = new Uint8Array(encodeUTF8(s))
  var i, j, t;
  var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
  s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
  for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
  s[l - 1] = data.length << 3;
  var w = [], f = [
    function () { return m[1] & m[2] | ~m[1] & m[3]; },
    function () { return m[1] ^ m[2] ^ m[3]; },
    function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
    function () { return m[1] ^ m[2] ^ m[3]; }
  ], rol = function (n, c) { return n << c | n >>> (32 - c); },
    k = [1518500249, 1859775393, -1894007588, -899497514],
    m = [1732584193, -271733879, null, null, -1009589776];
  m[2] = ~m[0], m[3] = ~m[1];
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0);
    for (j = 0; j < 80; j++)
      w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
        t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
        m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
    for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
  }
  t = new DataView(new Uint32Array(m).buffer);
  for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

  var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
    return (e < 16 ? "0" : "") + e.toString(16);
  }).join("");
  return hex;
}

/**
* 文本框根据输入内容自适应高度
* @param {HTMLElement} 输入框元素
* @param {Number} 设置光标与输入框保持的距离(默认0)
* @param {Number} 设置最大高度(可选)
*/
export const autoTextarea = (elem, extra, maxHeight) => {
  extra = extra || 0;
  let isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window;
  let isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera');
  let addEvent = (type, callback) => {
    elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent('on' + type, callback);
  };
  let getStyle = elem.currentStyle ? name => {
    let val = elem.currentStyle[name];
    if (name === 'height' && val.search(/px/i) !== 1) {
      let rect = elem.getBoundingClientRect();
      return rect.bottom - rect.top - parseFloat(getStyle('paddingTop')) - parseFloat(getStyle('paddingBottom')) + 'px';
    }
    return val;
  } : name => {
    return getComputedStyle(elem, null)[name];
  };
  let minHeight = parseFloat(getStyle('height'));
  elem.style.resize = 'none';
  let change = () => {
    let scrollTop, height, padding = 0, style = elem.style;
    if (elem._length === elem.value.length) return;
    elem._length = elem.value.length;
    if (!isFirefox && !isOpera) {
      padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
    }
    scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    elem.style.height = minHeight + 'px';
    if (elem.scrollHeight > minHeight) {
      if (maxHeight && elem.scrollHeight > maxHeight) {
        height = maxHeight - padding;
        style.overflowY = 'auto';
      } else {
        height = elem.scrollHeight - padding;
        style.overflowY = 'hidden';
      }
      style.height = height + extra + 'px';
      scrollTop += parseInt(style.height) - elem.currHeight;
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
      elem.currHeight = parseInt(style.height);
    }
  };
  addEvent('propertychange', change);
  addEvent('input', change);
  addEvent('focus', change);
  change();
}



/**
 * 返回顶部效果
 * @param num 需要滚动到的距离
 * @param time 时间单位ms
 * @param dom 指定元素滚动
 * */
export const _ScrollTop = (number = 0, time, dom) => {
  if (!time) {
    dom.scrollTop = number;
    return number;
  }
  const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime; // 计算循环的次数
  let nowTop = dom.scrollTop; // 获取当前滚动条位置
  let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
  let scrollTimer = setInterval(() => {
      if (spacingInex > 0) {
          spacingInex--;
          _ScrollTop(nowTop += everTop, null, dom);
      } else {
          clearInterval(scrollTimer); // 清除计时器
      }
  }, spacingTime);
}