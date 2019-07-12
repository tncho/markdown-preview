import * as React from 'react';
import ContentStyled from './styled';
import Panel from '../Panel/Panel';
import brace from 'brace';
import ReactMarkdown from 'react-markdown'
import AceEditor from 'react-ace';
import 'brace/mode/markdown';
import 'brace/theme/github';

export interface ContentProps {
}

export interface ContentState {
    text: string;
}

class Content extends React.Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);

        this.state = {
            text: ''
        };
    }

    onEditorContentChanged(editorText: string) {
        this.setState({ text: editorText });
    }

    public render() {
        return (
            <ContentStyled>
                <Panel>
                    <AceEditor
                        fontSize={15}
                        mode="markdown"
                        theme="github"
                        onScroll={e => console.log(e)}
                        onChange={this.onEditorContentChanged.bind(this)}
                        style={{ height: '100%', width: '100%' }}
                        value={this.state.text}
                        editorProps={{$blockScrolling: false}}
                    /></Panel>
                <Panel>
                    <ReactMarkdown source={this.state.text} />
                </Panel>
            </ContentStyled>
        );
    }
}

export default Content;