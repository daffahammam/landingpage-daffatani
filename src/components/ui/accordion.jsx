export function Accordion({ children, type = "multiple" }) {
    return <div className={`accordion ${type}`}>{children}</div>;
  }
  
  export function AccordionItem({ children, value }) {
    return <div className="accordion-item" value={value}>{children}</div>;
  }
  
  export function AccordionTrigger({ children }) {
    return <button className="accordion-trigger">{children}</button>;
  }
  
  export function AccordionContent({ children }) {
    return <div className="accordion-content">{children}</div>;
  }
  