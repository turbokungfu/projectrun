# this is my first attempt at Deno. I ran into a couple of issues with the linux installation and had to ask chatgpt why vscode couldn't find it when I installed it in my terminal.

This line will add the Deno binary folder to your PATH, allowing you to run the Deno command from anywhere on your system. If the bashrc file does not exist, you can create it in your home directory. To do this, follow these steps:

    Open the terminal and type nano ~/.bashrc. This will open the nano text editor and create the bashrc file in your home directory if it doesn't already exist.

    Add the line export PATH="$HOME/.deno/bin:$PATH" to the file.

    Save the changes and close the nano editor by pressing Ctrl + X, Y, and then Enter.

    Refresh your terminal by typing source ~/.bashrc and running deno --version. The output should show the Deno version number, indicating that the installation was successful.

# and then I had to figure out why it was sending me a html document to my vscode cli: 
Yes, it is normal to see HTML output in the command line interface (CLI) when you run a Deno program that makes an HTTP request to a website and logs the response. This HTML data is the content of the web page that the website sends back to the client (i.e., your Deno program). The purpose of this example is to demonstrate how to make a simple HTTP request using Deno's standard library, which includes a built-in module for making network requests. The HTML output is just a side effect of this demonstration. In a real-world web application, you would likely use the HTML data to build a dynamic web page, or to extract information from the page to use in your application.

# so I learned a little linux and I'm excited to learn ts.

export function even_or_odd(n:number):String {
  return n % 2 == 0 ? "Even" : "Odd";
}
<!-- I cheated :{} -->