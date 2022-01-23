
import { Hummer, View, Text, Image, Scroller, Navigator, Toast } from '@hummer/hummer-front'
import { Style } from '../common/CommonStyle'
import { Color } from '../common/CommonColor'
import { Img } from '../common/CommonResource'


class RootView extends View {

  contentView: View;

  constructor() {
    super();

    this.style = {
      ...Style.FullParentStyle,
      backgroundColor: Color.white
    }

    this.addContentView();
  }

  addContentView() {
    let contentLayout = new Scroller();
    contentLayout.style = {
      width: '100%',
      flexGrow: 1,
      flexShrink: 1,
    }

    for (let i = 0; i < 10; i++) {

      let v = new Text();
      v.text = i.toString();
      v.style = {
        width: '100%',
        height: '100',
        fontSize: 20,
        textAlign: 'center',
        color: Color.black,
        backgroundColor: i % 2 == 0 ? '#00FF0010' : '#FF000010',
      }

      contentLayout.appendChild(v)
    }
    

    this.appendChild(contentLayout)

  }

}

// 根页面渲染
Hummer.render(new RootView()); 