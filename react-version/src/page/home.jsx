import util from '../util';
import LocalSearch from '../wget/search'
import NavItem from '../wget/navItem'
import homeData from '../data/often.json'
const { useState,useEffect } = React


const searchEngine = [
  {
    name: '百度', icon: 'img/scbaidu.png',
    searchUrl: 'https://www.baidu.com/s?wd='
  },
  {
    name: '必应', icon: 'img/scbing.png',
    searchUrl: 'https://cn.bing.com/search?q='
  },
  {
    name: 'Google', icon: 'img/scgoogle.png',
    searchUrl: 'https://www.google.com/search?q='
  }
]
// 关键词联想地址
const suggestUrl = '//api.bing.com/qsonhs.aspx'

export default function () {
  // 输入框搜索结果
  const [searchRst, setSearchRst] = useState({
    local: [],
    engine: []
  })

  //搜索引擎选择的下拉框显示
  const [sChoiceVis, setSChoiceVis] = useState(false)

  // 目前选取的搜索引擎
  const [currentEngine, setCurrentEngine] = useState(
    searchEngine.find(el => {
      return (localStorage.getItem('searchType') || '百度') === el.name
    })
  )

  const [activeRst, setActiveRst] = useState({
    index: 0,
    type: 'local'
  })
  const [searchState, setSearchState] = useState(false)

  // const [sChoiceVis, setSChoiceVis] = useState(false)
  function sChoiceBtnClick() {
    setSChoiceVis(true)
  }

  function selectSearchEngine(engine) {
    setCurrentEngine(engine)
    localStorage.setItem('searchType', engine.name);
  }

  util.EA(document).onOtherOnce('click', '#sChoiceBtn', () => {
    // let box = document.getElementsByClassName('scBigBox')[0]
    // box.style['display'] = 'none'
    // box.style.height = '0'
    setSChoiceVis(false)
    // TODO:虽然在执行后移除了这个事件，但是还是会存在执行多次的情况
  })

  function onInput(e) {
    util.debounce(search, 500)(e)
  }

  function search(e) {
    let searchText = document.getElementById('search').value

    if (searchText === '') {
      setSearchState(false)
      return
    }
    // http://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug
    util.jsonp({
      url: suggestUrl,
      jsonp: 'cb',
      data: {
        type: 'cb',
        q: searchText,
        // cb: 'dealSearchReturn'
        // "wd": searchText,
        // "cb": "dealSearchReturn"
      },
      success(datas) {
        let local = LocalSearch.search(searchText)
        if (datas.AS.FullResults) {
          setSearchRst({
            engine: datas.AS.Results[0].Suggests,
            local
          })
          setSearchState(true)
        } else {
          setSearchRst({
            engine: [],
            local
          })
          setSearchState(true)
        }
        setActiveRst({
          index: 0,
          type: local.length ? 'local' : 'engine'
        })
      }
    });
  }

  function onKeyUp(event) {
    if (event.which == 13) {
      let { type, index } = activeRst
      if (activeRst.type === 'local') {
        var url = searchRst[type][index].url
      } else {
        var url = currentEngine.searchUrl + searchRst[type][index].Txt
      }

      window.open(url, '_blank')
    }
    //按下下方向键
    else if (event.which == 40) {
      if (activeRst.index === searchRst[activeRst.type].length - 1) {
        var index = 0
        var type = activeRst.type === 'local' ? 'engine' : 'local'
      } else {
        var index = activeRst.index + 1
        var type = activeRst.type
      }

      setActiveRst({
        index,
        type
      })
    }
    //按下上方向键
    else if (event.which == 38) {

      if (index <= 0) {
        var type = activeRst.type === 'local' ? 'engine' : 'local'
        var index = searchRst[type].length - 1
      } else {
        var index = activeRst.index - 1
        var type = activeRst.type
      }

      setActiveRst({
        index,
        type
      })

    }
  }

  useEffect(()=>{
    util.lazyLoad({
      content: window,
      imgs: document.getElementsByClassName('often')[0].querySelectorAll('img')
    })
  },[])

  return <div>
    <div className="search inputing">
      <div style={{ overflow: 'hidden' }}>
        <div className="search-pre">
          <div id="sChoiceBtn" style={{ background: `url(${currentEngine.icon})` }} title="切换搜索引擎" className="sChoiceBtn" onClick={sChoiceBtnClick}></div>
        </div>
        <div className="search-input">
          <input type="text" onInput={onInput} onKeyUp={onKeyUp} lang="zh-CN" placeholder="搜索" name="https://www.baidu.com/s?wd="
            id="search" autoComplete="off" className="textb"></input>
        </div>
        <div className="search-post btn-search" id="searchBtn"></div>
      </div>
      <div className="scBigBox" style={{ height: sChoiceVis ? '160px' : '0', display: sChoiceVis ? 'block' : 'none' }}>
        {searchEngine.map(s =>
          <div className="scSmallBox" key={s.name} onClick={() => {
            selectSearchEngine(s)
          }}><img src={s.icon} className="scImg"></img>
            <span className="scName">{s.name}</span>
          </div>
        )}
      </div>
      <div className="search-result" style={{ display: searchState ? 'block' : 'none' }}>
        <ul>
          {searchRst.local.map((el, i) =>
            <li className={`local-data ${(activeRst.type === 'local' && activeRst.index === i)
              ? 'active' : ''}`}
              key={i + 'local'} onClick={() => { window.open(el.url, '_blank') }}>
              <div className="result-icon">
                <i style={{ backgroundImage: `url(${el.icon}),url(img/404-1.png)` }}></i>
              </div>
              <div className="result-text">
                <span>{el.name}</span>
                <span className="desc">- {el.desc}</span>
              </div>
              <div className="result-url" data-url={el.url}>
                - {el.url}
              </div>
            </li>
          )}
          {searchRst.engine.map((el, i) =>
            <li className={`${(activeRst.type === 'engine' && activeRst.index === i)
              ? 'active' : ''}`}
              key={i + 'engine'} onClick={() => { window.open(currentEngine.searchUrl + el.Txt, '_blank') }}>
              <div className="result-icon">
                <i className="engine-icon" style={{ backgroundImage: 'url(img/searchBtn.png?v=2.0' }}></i>
              </div>
              <div className="result-text">
                <span>{el.Txt}</span>
              </div>
              <div className="result-type">
                - {currentEngine.name + '搜索'}
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
    <div className="often">
    <NavItem data={homeData}></NavItem>
    </div>
  </div>
}