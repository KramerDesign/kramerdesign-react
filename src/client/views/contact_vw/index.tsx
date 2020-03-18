import * as React from 'react'

import styled from 'styled-components'

import { PhoneNumber } from '~/src/client/components/phone-number'

import { validateEmail } from './components'
import console = require('console')

const validateName = (value: string, min: number, max: number) => {
  return value.length >= min && value.length <= max
}

type Props = {
  topics: string[]
}

type State = {
  name?: string
  email?: string
  topic?: string
  message?: string
  topicOptions?: Array<string>
  btnText: string
}

type FieldName = 'name' | 'email' | 'topic' | 'message'

type ConatctContent = {
  name: string
  email: string
  topic: string
  message: string
}

const sendContact = async (content: ConatctContent) => {
  const resp = await fetch(`/api/contact`, {
    method: 'POST',
    // credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(content),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (resp.status !== 200) {
    throw { status: resp.status, error: await resp.json() }
  }
}

export class ContactFormView extends React.Component<Props, State> {
  static defaultProps = {
    topics: [
      'Please send me more info.',
      'I would like to purchase an ezon back lotion applicator',
      'I would like to distribute your ezon back lotion applicators'
    ]
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      topic: 'Please send me more info.',
      message: '',
      btnText: 'Submit'
    }
  }

  updateField = (fieldName: FieldName) => {
    return event => {
      const value = event.target.value
      console.log(value)
      this.setState(() => {
        return { [fieldName]: value } as any
      })
    }
  }

  onSubmit = async event => {
    event.preventDefault()

    let content = {
      name: this.state.name,
      email: this.state.email,
      topic: this.state.topic,
      message: this.state.message
    }

    this.setState(() => {
      return { btnText: 'Sending...' }
    })

    try {
      await sendContact(content)
    } catch (e) {
    } finally {
      this.setState(() => {
        return { btnText: 'Submit' }
      })
    }
  }

  render() {
    return (
      <div>
        <Title>Phone or Message us Today</Title>
        <Title>
          <PhoneNumberStyling value="905-407-6489" />
        </Title>
        <ContactContainer>
          <Spacing>
            <LabelTitle>
              <Title_1 aria-label="Name">Name</Title_1>
              <RequiredStyling aria-label="Required">
                (Required)
              </RequiredStyling>
            </LabelTitle>
            <br />
            <Title_2
              validate={validateName(this.state.name, 2, 50)}
              placeholder="Please enter your name."
              aria-label="Please enter your name."
              value={this.state.name}
              onChange={this.updateField('name')}
              minLength={2}
              maxLength={50}
            />
            <br />
          </Spacing>

          <Spacing>
            <LabelTitle>
              <Title_1 aria-label="Email">Email</Title_1>
              <RequiredStyling aria-label="Required">
                (Required)
              </RequiredStyling>
            </LabelTitle>
            <br />
            <Title_2
              validate={validateEmail(this.state.email)}
              placeholder="Please enter your email."
              aria-label="Please enter your email."
              value={this.state.email}
              onChange={this.updateField('email')}
              maxLength={50}
            />
            <br />
          </Spacing>

          <Spacing>
            <LabelTitle>
              <Title_1 aria-label="Topic">Topic</Title_1>
              <RequiredStyling aria-label="Required">
                (Required)
              </RequiredStyling>
            </LabelTitle>
            <br />
            <SelectStyling
              placeholder="Please chose a topic"
              aria-label="Please chose a topic"
              onChange={this.updateField('topic')}
            >
              {this.props.topics.map((topic, index) => {
                return (
                  <option key={`${index}`} value={topic}>
                    {topic}
                  </option>
                )
              })}
            </SelectStyling>
            <br />
          </Spacing>

          <Spacing>
            <Title_1 aria-label="Message">Message:</Title_1>
            <br />
            <TextAreaStyling
              placeholder="How can we help."
              aria-label="How can we help."
              value={this.state.message}
              onChange={this.updateField('message')}
              maxLength={500}
            />
            <br />
          </Spacing>

          <ButtonContainer>
            <Button_One
              aria-label="Submit button"
              disabled={
                !validateEmail(this.state.email) ||
                !validateName(this.state.name, 2, 50)
              }
              onClick={this.onSubmit}
            >
              {this.state.btnText}
            </Button_One>
          </ButtonContainer>
        </ContactContainer>
      </div>
    )
  }
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Spacing = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 20px 0px 0px 0px;
`

const Title = styled.div`
  font-family: 'Times New Roman';
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: #404652;

  padding: 0px 0px 0px 0px;
  margin: 50px 1px 15px 1px;
`
const LabelTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: -15px;
`

const Title_1 = styled.label`
  font-family: 'Times New Roman';
  font-size: 1.5em;
  font-weight: bold;
  color: #404652;
`

const RequiredStyling = styled.div`
  font-family: 'Times New Roman';
  font-size: 1em;
  font-weight: bold;
  margin: 0px 0px 3px 8px;
  color: #404652;
`

const Title_2 = styled.input<any>`
  width: 100%;
  max-width: 500px;
  font-weight: bold;
  box-sizing: border-box;
  font-family: 'Times New Roman';
  font-size: 1.6em;
  background-color: #e3e4e5;
  border: 3px solid ${props => (props.validate ? '#404652' : 'red')};
  border-radius: 6px;

  &::placeholder {
    color: #888889;
    padding: 0px 0px 0px 10px;
  }

  padding: 0px 0px 0px 10px;
`

const SelectStyling = styled.select`
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  font-family: 'Times New Roman';
  font-size: 1.6em;

  position: center;
  font-weight: bold;

  border: 3px solid #404652;
  border-radius: 6px;
  padding: 0px 0px 0px 10px;
  background-color: #e3e4e5;
`

const TextAreaStyling = styled.textarea`
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  font-family: 'Times New Roman';
  font-size: 1.6em;

  resize: vertical;
  height: 2em;
  font-family: 'Times New Roman';
  font-weight: bold;
  background-color: #e3e4e5;

  border: 3px solid #404652;
  border-radius: 6px;

  &::placeholder {
    color: #888889;
    padding: 0px 0px 0px 10px;
  }

  padding: 0px 0px 0px 10px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Button_One = styled.button<any>`
  font-family: 'Times New Roman';
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  color: #404652;
  background-color: #e3e4e5;
  border: 4px solid #404652;
  border-radius: 6px;
  padding: 5px 10px 5px 10px;
  margin: 50px 1px 10px 1px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`
const PhoneNumberStyling = styled(PhoneNumber)`
  color: #404652;
  font-weight: 900;
  font-size: 1.6em;
  text-decoration: none;
  background-color: transparent;
`
