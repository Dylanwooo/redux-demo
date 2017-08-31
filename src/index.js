function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

const appState = {
    title: {
        text: '这是标题',
        color: 'red',
    },
    content: {
        text: '这是我的内容',
        color: 'blue'
    }
};

function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
    if (newAppState === oldAppState) return; // 数据没有变化就不渲染了
    console.log('render app...');
    renderTitle(newAppState.title, oldAppState.title);
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (title) {
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color
}

function renderContent (content) {
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color
}
//用于数据修改
function dispatch (action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
            break
    }
}

function stateChanger (state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break
    }
}

const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());
dispatch({ type: 'UPDATE_TITLE_TEXT', text: '改变的title' });
renderApp(appState);