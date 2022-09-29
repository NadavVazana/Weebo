import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddOptions } from './add-options';

export const AddAccordion = ({ setOptionList, addElement, isOptionsMenu, toggleOptionsMenu }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion style={{marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'All')} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        All
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{marginTop:0}}>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'All' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>

            <Accordion  style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Headers')} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Headers
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Headers' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Heroes')} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Heroes
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Heroes' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu} />}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Cards')} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Cards
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Cards' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Forms')} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Forms
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Forms' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Maps')} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Maps
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Maps' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Galleries')} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Galleries
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Galleries' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>
            <Accordion style={{marginTop:0,marginBottom:0}} onClick={(event) => toggleOptionsMenu(event,'Footers')} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content"
                    id="panel8bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Footers
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    {isOptionsMenu.isOpen && isOptionsMenu.cmpType === 'Footers' && 
                    <AddOptions setOptionList={setOptionList} addElement={addElement} isOptionsMenu={isOptionsMenu}  />}
                </AccordionDetails>
            </Accordion>
  
        </div>
    );
}
