import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import {CN} from './src/util/tools';
import dot from './src/page/demo.less'

import {
    BasicPage, 
    ButtonPage,
    CalenderPage, 
    CarouselPage, 
    CheckBoxPage,
    CheckBoxGroupPage,
    ConfirmBoxPage,
    DatePickerPage,
    DropDownPage,
    MenuPage,
    ToastPage,
    ModalPage,
    NoticePage,
    PaginationPage,
    PinPage,
    ProgressPage,
    RadioPage,
    RadioGroupPage,
    SlideMenuPage,
    TabPage,
    TimeInputPage,
    TooltipPage,
    CardPage,
    CommentPage,
} from './src/page/index';

const NavLink = (props) => {
    return (
        <Link {...props} activeClassName="active"></Link>
    );
}

export class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        const {children} = this.props;
        const {pathname} = this.props.location;
        return (
            <page className={CN('container')}>
                {pathname !== '/' ? 
                    <div>
                        <header className={CN('basic block')}>
                            <h1>
                                <Link to="/basic" className={CN('color-deep_gray')}>
                                    React UIkit
                                </Link>
                            </h1>
                        </header>
                        <div className={CN('grid')}>
                            <aside className={CN('column-3 main-aside')}>
                                <NavLink to="/basic">基本</NavLink>
                                <NavLink to="/button">按钮</NavLink>
                                <NavLink to="/calender">日历</NavLink>
                                <NavLink to="/card">卡片</NavLink>
                                <NavLink to="/carousel">跑马灯</NavLink>
                                <NavLink to="/checkbox">复选框</NavLink>
                                <NavLink to="/checkboxgroup">复选框组</NavLink>
                                <NavLink to="/comment">评论</NavLink>
                                <NavLink to="/confirmbox">确认框</NavLink>
                                <NavLink to="/datepicker">日期选择</NavLink>
                                <NavLink to="/dropdown">下拉框</NavLink>
                                <NavLink to="/menu">菜单</NavLink>
                                <NavLink to="/toast">消息</NavLink>
                                <NavLink to="/modal">弹出层</NavLink>
                                <NavLink to="/notice">通知</NavLink>
                                <NavLink to="/pagination">分页</NavLink>
                                <NavLink to="/pin">大头针</NavLink>
                                <NavLink to="/progress">进度条</NavLink>
                                <NavLink to="/radio">单选框</NavLink>
                                <NavLink to="/radiogroup">单选框组</NavLink>
                                <NavLink to="/slidemenu">切换菜单</NavLink>
                                <NavLink to="/tab">选项卡</NavLink>
                                <NavLink to="/timeinput">时间输入</NavLink>
                                <NavLink to="/tooltip">提示框</NavLink>
                            </aside>
                            <artical className="column column-13 main-content">
                                {children}
                            </artical>
                        </div>
                    </div>
                    : <RootPage/>
                }
            </page>
        );
    }
}

class RootPage extends Component {
    render() {
        return (
            <div className={CN('basic fluid table intro-page absolute-center')}>
                <div className="row">
                    <div className="cell">
                        <h1 className={CN('field')}>
                            React UIkit
                        </h1>
                        <p className={CN('field')}>Component set build with React.js</p>
                        <Link to="/basic" className={CN('red button')}>see more</Link>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={RootPage}/>
                        <Route path="/basic" component={BasicPage}></Route>
                        <Route path="/button" component={ButtonPage}></Route>
                        <Route path="/calender" component={CalenderPage}></Route>
                        <Route path="/carousel" component={CarouselPage}></Route>
                        <Route path="/checkbox" component={CheckBoxPage}></Route>
                        <Route path="/checkboxgroup" component={CheckBoxGroupPage}></Route>
                        <Route path="/comment" component={CommentPage}></Route>
                        <Route path="/confirmbox" component={ConfirmBoxPage}></Route>
                        <Route path="/datepicker" component={DatePickerPage}></Route>
                        <Route path="/dropdown" component={DropDownPage}></Route>
                        <Route path="/menu" component={MenuPage}></Route>
                        <Route path="/toast" component={ToastPage}></Route>
                        <Route path="/modal" component={ModalPage}></Route>
                        <Route path="/notice" component={NoticePage}></Route>
                        <Route path="/pagination" component={PaginationPage}></Route>
                        <Route path="/pin" component={PinPage}></Route>
                        <Route path="/progress" component={ProgressPage}></Route>
                        <Route path="/radio" component={RadioPage}></Route>
                        <Route path="/radiogroup" component={RadioGroupPage}></Route>
                        <Route path="/slidemenu" component={SlideMenuPage}></Route>
                        <Route path="/tab" component={TabPage}></Route>
                        <Route path="/timeinput" component={TimeInputPage}></Route>
                        <Route path="/tooltip" component={TooltipPage}></Route>
                        <Route path="/card" component={CardPage}></Route>
                    </Route>
                </Router>, document.getElementById('root'))