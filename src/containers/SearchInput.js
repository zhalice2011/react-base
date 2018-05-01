/* eslint-disable */

import React, { Component } from 'react';

import { Input } from 'antd';
const Search = Input.Search;

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder || '百度一下,你就知道',
            query: props.query,
        };
    }
    search = (value) => {
        console.log('dali', value)
        console.log('this.state', this.state)
        let query = this.state.query
        let loc = ''
        switch (query) {
            case "baidu_txt":
                loc = "http://www.baidu.com/s?wd=" + value;
                break;
            case "baidu_img":
                loc = "http://image.baidu.com/i?ct=201326592&lm=-1&tn=baiduimagenojs&pv=&word=" + value + "&z=0&pn=0&rn=16&cl=2";
                break;
            case "yodao_txt":
                loc = "http://www.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=web.index";
                break;
            case "yodao_img":
                loc = "http://image.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=image.index";
                break;
            case "yodao_dict":
                loc = "http://dict.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=dict.index";
                break;
            case "yodao_blog":
                loc = "http://blog.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=blog.top";
                break;
            case "iask_ditu":
                loc = "http://ditu.iask.com/a/r.php?cl=北京&key=" + value;
                break;
            case "verycd":
                loc = "http://www.verycd.com/search/folders/" + encodeURI(value);
                break;
            case "google_txt":
                loc = encodeURI("http://www.google.com/search?hl=en&q=" + value + "&btnG=Google+Search");
                break;
            case "yahoo_txt":
                loc = "http://search.yahoo.com/search?p=" + encodeURI(value) + "&vc=&fr=yfp-t-501&toggle=1&cop=mss&ei=UTF-8&fp_ip=CN";
                break;
            case "trans_en":
                loc = "http://209.85.171.104/translate_c?hl=en&sl=en&tl=zh-CN&u=http://" + value + "/&usg=ALkJrhijPevZUxPtrHDj94k1U9Wo8x7S8g";
                break;
            case "google_code":
                loc = "http://www.google.com/codesearch?q=" + value + "&hl=en&btnG=Search+Code";
                break;
            case "google_scholar":
                loc = "http://scholar.google.com/scholar?q=" + value + "&hl=en&lr=&btnG=Search";
                break;
            case "zhihu_question":
                loc = "http://www.zhihu.com/search?q="+ value +"&type=question";
                break;
    
        }
        window.open(loc)
    }
    render() {
        const { placeholder } = this.state;
        return (
            <div>
                <Search
                    placeholder={placeholder || '百度一下,你就知道'}
                    onSearch={value => {
                        this.search(value)
                    }
                    }
                    style={{ width: 500 }}
                />
            </div>
        );
    }
}

// 多种查询引擎请求分派 
function submit_query(t_query) {
    var keyword = document.getElementById("keyword");
    var mylink = document.getElementById("mylink");
    var loc = "";
    switch (t_query) {
        case "baidu_txt":
            loc = "http://www.baidu.com/s?wd=" + value;
            break;
        case "baidu_img":
            loc = "http://image.baidu.com/i?ct=201326592&lm=-1&tn=baiduimagenojs&pv=&word=" + value + "&z=0&pn=0&rn=16&cl=2";
            break;
        case "yodao_txt":
            loc = "http://www.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=web.index";
            break;
        case "yodao_img":
            loc = "http://image.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=image.index";
            break;
        case "yodao_dict":
            loc = "http://dict.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=dict.index";
            break;
        case "yodao_blog":
            loc = "http://blog.yodao.com/search?q=" + encodeURI(value) + "&ue=utf8&keyfrom=blog.top";
            break;
        case "iask_ditu":
            loc = "http://ditu.iask.com/a/r.php?cl=北京&key=" + value;
            break;
        case "verycd":
            loc = "http://www.verycd.com/search/folders/" + encodeURI(value);
            break;
        case "google_txt":
            loc = encodeURI("http://www.google.com/search?hl=en&q=" + value + "&btnG=Google+Search");
            break;
        case "yahoo_txt":
            loc = "http://search.yahoo.com/search?p=" + encodeURI(value) + "&vc=&fr=yfp-t-501&toggle=1&cop=mss&ei=UTF-8&fp_ip=CN";
            break;
        case "trans_en":
            loc = "http://209.85.171.104/translate_c?hl=en&sl=en&tl=zh-CN&u=http://" + value + "/&usg=ALkJrhijPevZUxPtrHDj94k1U9Wo8x7S8g";
            break;
        case "google_code":
            loc = "http://www.google.com/codesearch?q=" + value + "&hl=en&btnG=Search+Code";
            break;
        case "google_scholar":
            loc = "http://scholar.google.com/scholar?q=" + value + "&hl=en&lr=&btnG=Search";
            break;
        case "zhihu_question":
            loc = "http://www.zhihu.com/search?q="+ value +"&type=question";
            break;

    }
    setEngine(t_query);
    setCookie('default-engine', t_query);
    mylink.href = loc;
    mylink.click();
}
function getDefaultEngine() {
    var dq = getCookie('default-engine');
    if (dq == null) dq = "baidu_txt";
    return dq;
}
function setDefaultEngine() {
    var old_e = getDefaultEngine();
    if ($(old_e).innerText.indexOf('*') < 0)
        $(old_e).innerText = $(old_e).innerText + '*';
}
function setEngine(new_e) {
    var old_e = getDefaultEngine();
    if ($(old_e).innerText.indexOf('*') >= 0)
        $(old_e).innerText = $(old_e).innerText.replace('*', '');
    if ($(new_e).innerText.indexOf('*') < 0)
        $(new_e).innerText = $(new_e).innerText + '*';
    setCookie('default-engine', new_e);
} 