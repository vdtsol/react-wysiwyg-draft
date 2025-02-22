/* @flow */

import React, { Component } from "react";
import { Editor } from "react-wysiwyg-draft";
import uploadImageCallBack from "../../util/uploadImageCallBack";
import "./styles.css";

export default class Home extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.id = "_carbonads_js";
    script.type = "text/javascript";
    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CEBIP5Q7&placement=vdtsolgithubio";
    script.async = true;

    document.getElementById("carbon_ad").appendChild(script);
  }

  render() {
    return (
      <div className="root">
        <div className="carbon_wrapper">
          <div id="carbon_ad" className="carbon_ad" />
          <Editor
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            toolbar={{
              image: {
                uploadCallback: uploadImageCallBack,
                alt: { present: true },
                previewImage: true,
              },
              fontFamily: {
                options: [
                  "Arial",
                  "Georgia",
                  "Impact",
                  "Tahoma",
                  "Roboto",
                  "Times New Roman",
                  "Verdana",
                ],
              },
            }}
            placeholder="Begin typing..."
            hashtag={{}}
          />
        </div>
        <div className="quote-section">
          <div className="quote">
            <span className="quote-text">This is incredibly well done!</span>
            <span className="quote-author">
              Simon Sturmer (
              <a
                target="_blank"
                href="https://kodefox.com"
                rel="noopener noreferrer"
              >
                KodeFox
              </a>
              )
            </span>
          </div>
          <div className="quote">
            <span className="quote-text">
              vdtsol’s WYSIWYG editor has a lot of cool features. A great place
              for inspiration and learning from the code.
            </span>
            <span className="quote-author">
              Nik Graf (
              <a
                target="_blank"
                href="https://www.draft-js-plugins.com/"
                rel="noopener noreferrer"
              >
                DraftJS Plugins
              </a>
              )
            </span>
          </div>
        </div>
        <div className="discussion">
          For discussions join public channel #rd-wysiwyg{" "}
          <a
            target="_blank"
            href="https://draftjs.herokuapp.com/"
            rel="noopener noreferrer"
          >
            DraftJS Slack Organization
          </a>
        </div>
        <div className="home-label">Features</div>
        <ul className="feature-list">
          <li className="home-listItem">
            Configurable toolbar with option to add/remove controls.
          </li>
          <li className="home-listItem">
            Option to change the order of the controls in the toolbar.
          </li>
          <li className="home-listItem">
            Option to add custom controls to the toolbar.
          </li>
          <li className="home-listItem">
            Option to change styles and icons in the toolbar.
          </li>
          <li className="home-listItem">
            Option to conditionally show hide toolbar.
          </li>
          <li className="home-listItem">
            Support for inline styles: Bold, Italic, Underline, StrikeThrough,
            Code, Subscript, Superscript.
          </li>
          <li className="home-listItem">
            Support for block types: Paragraph, H1 - H6, Blockquote, Code.
          </li>
          <li className="home-listItem">
            Support for setting font-size and font-family and option to add
            custom types.
          </li>
          <li className="home-listItem">
            Support for ordered / unordered lists and indenting.
          </li>
          <li className="home-listItem">Support for text-alignment.</li>
          <li className="home-listItem">
            Support for coloring text or background and option to add your own
            color values.
          </li>
          <li className="home-listItem">Support for adding / editing links</li>
          <li className="home-listItem">
            Choice of more than 150 emojis and option to add you own unicode
            emojis.
          </li>
          <li className="home-listItem">Support for mentions.</li>
          <li className="home-listItem">Support for hashtags.</li>
          <li className="home-listItem">
            Support for adding / uploading images.
          </li>
          <li className="home-listItem">
            Support for aligning images, setting height, width.
          </li>
          <li className="home-listItem">
            Support for Embedded links, flexibility to set height and width.
          </li>
          <li className="home-listItem">
            Option provided to remove added styling.
          </li>
          <li className="home-listItem">Option of undo and redo.</li>
          <li className="home-listItem">
            Configurable behavior for RTL and Spellcheck.
          </li>
          <li className="home-listItem">Support for placeholder.</li>
          <li className="home-listItem">
            Support for WAI-ARIA Support attributes
          </li>
          <li className="home-listItem">
            Using editor as controlled or un-controlled React component.
          </li>
          <li className="home-listItem">
            Support to convert Editor Content to HTML, JSON, Markdown.
          </li>
          <li className="home-listItem">
            Support to convert the HTML generated by the editor back to editor
            content.
          </li>
          <li className="home-listItem">Support for internationalization.</li>
        </ul>
      </div>
    );
  }
}
