import { getAuth, onAuthStateChanged } from "firebase/auth"
import { NextRouter, useRouter, withRouter } from "next/router"
import dynamic from 'next/dynamic'
import { Component, Fragment, useEffect, useRef, useState } from "react"
import Dropzone, { DropEvent, FileRejection } from 'react-dropzone'
import { Formik } from 'formik'
import { convertToRaw, EditorState } from 'draft-js'

import ConsoleHeader from '../../../components/console/Header'
import { firebaseApp } from "../../../firebase/init"

import { Editor } from 'react-draft-wysiwyg'

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface IProps {
  router: NextRouter
}
interface IState {
  validateAuth: boolean

  imageCover: File | null
  imageCoverPreview: string | null

  contentEditor: EditorState
}

class ConsoleWorksAdd extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      validateAuth: false,
      imageCover: null,
      imageCoverPreview: null,
      contentEditor: EditorState.createEmpty(),
    }
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

                    <Editor
                      editorState={this.state.contentEditor}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={this.contentEditorRefresh}
                      toolbar={{

                      }}
                    />
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
      </Fragment>
    )
  }
}

export default withRouter(ConsoleWorksAdd)
