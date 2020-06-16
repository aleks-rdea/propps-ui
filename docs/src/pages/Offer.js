import React, { useEffect, useCallback, useState, useContext } from 'react'
import {
  ActionGroup,
  Button,
  Input,
  ListItem,
  ListItemHelp,
  ListWrapper,
  Section,
  SectionHeader,
  Select,
  StacksUI,
  StackMain
} from 'propps-ui'

const Offer = () => {
  const [help, setHelp] = useState(false)
  const [helpLabel, setHelpLabel] = useState('Show help')
  const [currentStep, setCurrentStep] = useState(1)
  const stacks = useContext(StacksUI)

  useEffect(() => {
    // window.location.hash = '#step1'; // If global showHelp is on
    // inputName.current.focus();
  })

  const toggleHelp = () => {
    setHelp(!help)
    if (help) {
      setHelpLabel('Show help')
      window.location.hash = ''
    } else {
      setHelpLabel('Hide help')
      window.location.hash = '#step1'
    }
  }

  const toggleNextStep = useCallback(
    event => {
      event.preventDefault()
      setCurrentStep(currentStep + 1)
    },
    [currentStep]
  )

  return (
    <div>
      <StackMain mono>
        <h1>Make an offer</h1>
        <p id="print"></p>
        <Button small label={helpLabel} onClick={() => toggleHelp()} />

        <Section>
          {!help && <SectionHeader title="Property" />}
          <ListWrapper help={help}>
            <ListItemHelp
              id="step1"
              href="#step2"
              actionLabel="Continue"
              help={help}
              question="Which property are you making an offer on?"
              helpAfter="This is the address for the property you'd like to purchase."
            >
              <ListItem>
                <label>Address</label>
                <Input
                  errors={["We'll definitely need an address. Lol."]}
                  type="text"
                />
              </ListItem>
            </ListItemHelp>
          </ListWrapper>
        </Section>

        <Section>
          {!help && <SectionHeader title="Agent" />}

          <ListWrapper help={help}>
            <ListItemHelp
              id="step2"
              href="#step3"
              actionLabel="Continue"
              help={help}
              question="Who is the agent you'd like to send your offer to?"
              helpAfter="It might be worth sending your offer to a couple of agents to make sure it doesn't get missed or lost in their inbox."
            >
              <ListItem>
                <label>Name</label>
                <Input type="text" placeholder="Type here ..." />
              </ListItem>
              <ListItem>
                <label>Email</label>
                <Input type="text" placeholder="Type here ..." />
              </ListItem>
              <ListItem>
                <label>Phone</label>
                <Input type="text" placeholder="Type here ..." />
              </ListItem>
              <ActionGroup>
                <Button small label="Add another agent" />
              </ActionGroup>
            </ListItemHelp>
          </ListWrapper>
        </Section>

        <Section>
          {!help && <SectionHeader title="Amount" />}

          <ListWrapper help={help} id="step3">
            <ListItemHelp
              id="step3"
              href="#step4"
              actionLabel="Continue"
              help={help}
              question="How much would you like to offer for the property?"
              helpAfter="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Offer amount</label>
                <Input xlarge centered type="text" placeholder="$ 1,500,000" />
              </ListItem>
              <ListItem>
                <label>Deposit</label>
                <Input type="text" placeholder="10%" />
              </ListItem>
            </ListItemHelp>
            <ListItemHelp
              id="step4"
              href="#step5"
              actionLabel="Continue"
              help={help}
              question="When would you prefer the settlement date to be?"
              helpAfter="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Settlement date</label>
                <Select>
                  <optgroup label="From signing">
                    <option value="30">30 days after purchase</option>
                    <option value="45">45 days after purchase</option>
                    <option value="60">60 days after purchase</option>
                    <option value="90">90 days after purchase</option>
                  </optgroup>
                  <optgroup label="Custom">
                    <option value="days">
                      Specific no. of days after purchase
                    </option>
                    <option value="date">Specific date</option>
                  </optgroup>
                </Select>
              </ListItem>
            </ListItemHelp>
          </ListWrapper>
        </Section>

        <Section>
          {!help && <SectionHeader title="Finance" />}
          <ListWrapper help={help}>
            <ListItemHelp
              id="step5"
              href="#step6"
              actionLabel="Continue"
              help={help}
              question="Do you have finance pre-approval?"
              helpAfter="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Pre-approval</label>
                <Input type="text" placeholder="Condtional pre-approval" />
              </ListItem>
            </ListItemHelp>
            <ListItemHelp
              id="step6"
              href="#step7"
              actionLabel="Continue"
              help={help}
              question="Which financial institution are you using?"
              helpAfter="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Institution</label>
                <Input type="text" placeholder="Select..." />
              </ListItem>
            </ListItemHelp>
            <ListItemHelp
              id="step7"
              href="#step8"
              actionLabel="Continue"
              help={help}
              question="How much are you approved for?"
              helpAfter="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Approval amount</label>
                <Input type="text" placeholder="$ 1,600,000" />
              </ListItem>
            </ListItemHelp>
          </ListWrapper>
        </Section>

        <Section>
          {!help && <SectionHeader title="Conditions" />}
          <ListWrapper help={help}>
            <ListItemHelp
              id="step8"
              href="#step9"
              actionLabel="Continue"
              help={help}
              question="Are there any conditions you'd like to make with your offer?"
              helpAfter="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Condition 1</label>
                <Input type="text" placeholder="Subject to finance" />
              </ListItem>
              <ListItem>
                <label>Condition 2</label>
                <Input type="text" placeholder="Subject to pest inspection" />
              </ListItem>
            </ListItemHelp>
          </ListWrapper>
        </Section>

        <Section>
          {!help && <SectionHeader title="Signature" />}
          <ListWrapper help={help}>
            <ListItemHelp
              id="step9"
              help={help}
              question="Do you accept the legally binding nature of your offer?"
              helpBefore="Quick tips: Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
            >
              <ListItem>
                <label>Do you agree?</label>
                <Select>
                  <option disabled selected value>
                    -- Pick an option --
                  </option>
                  <option value="yes">
                    I agree to the legally binding nature of this offer.
                  </option>
                </Select>
              </ListItem>
              <ListItem>
                <label>First name</label>
                <Input type="text" placeholder="John" />
              </ListItem>
              <ListItem>
                <label>Last name</label>
                <Input type="text" placeholder="Citizen" />
              </ListItem>
              <ListItem>
                <label>Your address</label>
                <Input type="text" placeholder="38 Barney Lane" />
              </ListItem>
              <ListItem>
                <label>Email address</label>
                <Input type="text" placeholder="john@email.com" />
              </ListItem>
              <ListItem>
                <label>Mobile phone</label>
                <Input type="text" placeholder="0412 345 678" />
              </ListItem>
              <ListItem column>
                <label>Signature</label>
                <div
                  style={{
                    border: '1px solid #e6e6e6',
                    marginBottom: '-11px',
                    marginTop: '8px',
                    display: 'block',
                    width: '100%',
                    height: '320px'
                  }}
                ></div>
              </ListItem>
            </ListItemHelp>
          </ListWrapper>
        </Section>

        <ActionGroup centered>
          <Button cta label="Sign and send offer" />
          <a
            onClick={() => {
              stacks.toggleModal()
            }}
          >
            Save changes
          </a>
        </ActionGroup>
      </StackMain>
    </div>
  )
}

export default Offer
