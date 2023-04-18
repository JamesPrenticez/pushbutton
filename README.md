# PushButton

## Mission Statement
Automate processing of invoices for a project based business

## Typical User
A typical user is a construction company with many projects and multiple subcontractor/suppliers per project. 

## MVP
1. Multi-tenant DB structure
  - Organizaitions can have many employee accounts
  - Organizaitions can have many projects

2. User Authenticaion

3. File Storage for PDF Invoices
    - Drag Drop [https://dev.to/bmvantunes/react-file-upload-with-drag-n-drop-and-progress-bar-2k0m][https://www.youtube.com/watch?v=MAw0lQKqjRA]

4. Invoice to Data Processing
    - invoice2data 
      - https://github.com/invoice-x/invoice2data
      - https://github.com/invoice-x/invoice2data
    
    - python enviroment for local host
      - pip install virtualenv (install)
      - virtualenv venv (create)
      - ``` source venv/Scripts/activate ``` (run)
      - pip install -r requirements.txt


# Helpful
- https://jsonlint.com/
- https://github.com/vercel/fun/issues/56 <- windows can handle vercel dev so we need linux and you need to enable virtulisation in the bios...
- https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl <= you need to install nvm and node again...
- https://docs.microsoft.com/en-us/windows/python/web-frameworks <= Ubuntu 18.04 LTS comes with Python 3.6 already installed, but it does not come with some of the modules that you may expect to get with other Python installations. We will still need to install pip, the standard package manager for Python, and venv, the standard module used to create and manage lightweight virtual environments. 
- python3 --version
Python 3.8.10
- sudo apt install python3-pip


     {/* <div>
        <div className='bg-ocean-1 h-16 w-64'></div>
        <div className='bg-ocean-2 h-16 w-64'></div>
        <div className='bg-ocean-3 h-16 w-64'></div>
        <div className='bg-ocean-4 h-16 w-64 '></div>
      </div>

      <div>
        <div className='font-extralight'>ExtraLight: The quick brown fox jumps over the lazy dog</div>
        <div className='font-light'>Light: The quick brown fox jumps over the lazy dog</div>
        <div className='font-normal'>Normal: The quick brown fox jumps over the lazy dog</div>
        <div className='font-medium'>Medium: The quick brown fox jumps over the lazy dog</div>
        <div className='font-semibold'>SemiBold: The quick brown fox jumps over the lazy dog</div>
        <div className='font-bold'>Bold: The quick brown fox jumps over the lazy dog</div>
        <div className='font-extrabold'>ExtraBold: The quick brown fox jumps over the lazy dog</div>
      </div> */}