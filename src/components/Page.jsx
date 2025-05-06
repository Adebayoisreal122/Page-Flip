import React, {forwardRef} from 'react'

const Page = forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-white" ref={ref}>
           
            <div className='text-gray-800 h-full'>{props.children}</div>

          {props.number ? (
  <p className='text-gray-400 text-sm text-end'>
    Page number: {props.number}
  </p>
) : null}

        </div>
    );
});

export default Page
