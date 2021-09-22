import { getAuth, onAuthStateChanged } from "firebase/auth"
import { NextRouter, withRouter } from "next/router"
import dynamic from 'next/dynamic'
import { Component, Fragment, createRef, RefObject } from "react"
import Dropzone, { DropEvent, FileRejection } from 'react-dropzone'
import { Formik } from 'formik'

import { convertToRaw, EditorState, Modifier } from 'draft-js'
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor'
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar'

import ConsoleHeader from '../../../components/console/Header'
import { firebaseApp } from "../../../firebase/init"

import '@draft-js-plugins/side-toolbar/lib/plugin.css'
import editorStyles from './add.module.scss'

const sideToolbarPlugin = createSideToolbarPlugin()
const { SideToolbar } = sideToolbarPlugin
const plugins = [sideToolbarPlugin]
const text = ''


interface IProps {
  router: NextRouter
}
interface IState {
  validateAuth: boolean

  imageCover: File | null
  imageCoverPreview: string | null

  contentEditor: EditorState
  editorRef: RefObject<Editor>
}

class ConsoleWorksAdd extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      validateAuth: false,
      imageCover: null,
      imageCoverPreview: null,
      contentEditor: EditorState.createEmpty(),
      editorRef: createRef<Editor>()
    }

    this.contentEditorRefresh = this.contentEditorRefresh.bind(this)
    this.editorFocus = this.editorFocus.bind(this)
  }

  async validateAuth() {
    const fbApp = firebaseApp()
    const fbAuth = getAuth(fbApp)

    onAuthStateChanged(fbAuth, async authData => {
      if (!authData) {
        this.props.router.push('/console/auth')
      } else {
        this.setState({ validateAuth: true })
      }
    })
  }

  contentEditorRefresh(editorState: EditorState) {
    if (this.state.contentEditor)
      this.setState({ contentEditor: editorState })
  }

  handleFile(file: File) {
    this.setState({
      imageCover: file,
      imageCoverPreview: URL.createObjectURL(file),
    })
  }

  handleCoverDrop(acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) {
    console.group("handleCoverDrop")
    console.log("acceptedFiles", acceptedFiles)
    console.log("fileRejections", fileRejections)
    console.log("event", event)
    console.groupEnd()

    const imageFile = acceptedFiles.length > 0 ? acceptedFiles[0] : null
    if (imageFile) this.handleFile(imageFile)
  }

  editorFocus() {
    if (this.state.editorRef.current) {
      this.state.editorRef.current.focus()
    }
  }

  render() {
    return (
      <Fragment>
        <ConsoleHeader />
        
        <div className="xl:container mx-auto mt-8">
          <div className="flex flex-col items-center">

            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  // errors.email = 'Required'
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  // errors.email = 'Invalid email address'
                }
                return errors
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  setSubmitting(false)
                }, 400)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit} className="flex max-w-3xl w-full flex-col">

                  {/* Step 1: Title */}
                  <div className="w-full">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="border mt-1 form-input px-4 py-3 rounded w-full" />
                  </div>
                  {/* End Step 1: Title */}

                  {/* Step 2: Description */}
                  <div className="w-full mt-8">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="border mt-1 form-input px-4 py-3 rounded w-full" />
                  </div>
                  {/* End Step 2: Description */}

                  {/* Step 3: Cover */}
                  { this.state.imageCoverPreview && <div className="mt-8 items-center text-center mx-auto flex w-full flex-col">
                    <div className="max-w-[350px] w-full h-auto">
                      <img src={this.state.imageCoverPreview} alt='cover' className="w-full h-full" /> 
                    </div>
                    <div className="whitespace-pre-line break-words">
                      <span> {this.state.imageCover?.name} </span>
                    </div>
                  </div> }
                  <div className="w-full mt-8">
                    <label htmlFor="cover">Cover</label>
                    <Dropzone
                      multiple={false}
                      minSize={0}
                      maxSize={10485760}
                      accept="image/png,image/jpg,image/jpeg,image/gif"
                      onDrop={this.handleCoverDrop}>
                      {({getRootProps, getInputProps}) => (
                        <div className="flex items-center justify-center w-full cursor-pointer" {...getRootProps()}>
                          <div
                            className="flex flex-col w-full h-32 border-4 border-[#9E8B7A] border-dashed hover:bg-gray-100 hover:border-gray-300">
                            <div className="flex flex-col items-center justify-center pt-7">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                  Attach a file (jpg, jpeg, png, gif)
                                </p>
                            </div>
                            <input className="opacity-0" {...getInputProps()} />
                          </div>
                        </div>
                      )}
                    </Dropzone>
                  </div>
                  {/* End Step 3: Cover */}

                  {/* Step 4: Content */}
                  <div className="w-full mt-8">
                    <label htmlFor="content">Content</label>
                    {/* <input type="text" name="content" id="content" className="border mt-1 form-input px-4 py-3 rounded w-full" /> */}
                    <div className={editorStyles.editor} onClick={this.editorFocus}>
                      <Editor
                        editorState={this.state.contentEditor}
                        onChange={this.contentEditorRefresh}
                        plugins={plugins}
                        ref={this.state.editorRef}
                      />
                      <SideToolbar />
                    </div>
                  </div>
                  {/* End Step 4: Content */}


                  {/* <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  /> */}
                  {errors.password && touched.password && errors.password}
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>

          </div>
        </div>
        
        <div className="hidden overflow-hidden h-0 w-0">
          <svg id="svg_bold" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(ConsoleWorksAdd)
