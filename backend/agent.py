from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langchain.agents import AgentExecutor
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.agents.format_scratchpad.openai_tools import (
    format_to_openai_tool_messages,
)
from langchain.agents.output_parsers.openai_tools import OpenAIToolsAgentOutputParser
# import add, remove, get_all from database
from dotenv import load_dotenv
import os

# Load environment variables from .env file
os.environ["TAVILY_API_KEY"] = "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"
api_key = os.environ.get("OPENAI_API_KEY")

# make tools
search = TavilySearchResults(max_results=5)
'''
@tool
def add_tool(data):
    """
    Adds the input data into the database given the data
    """
    return add(data)


@tool
def remove_tool(data):
    """
    Removes the input data in the database given the data
    """
    return remove(data)


@tool
def get_all_tool(data):
    """
    Returns all of the items in the database
    """
    return get_all(data)


tools = [search, add_tool, remove_tool, get_all_tool]
'''

tools = [search]
prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are very powerful food assistant, you have access to your users fridge as well as access to the web to search for recipies.",
        ),
        ("user", "{input}"),
        MessagesPlaceholder(variable_name="agent_scratchpad"),
    ]
)

llm = ChatOpenAI(api_key=api_key, model="gpt-4o-mini")

llm_with_tools = llm.bind_tools(tools)

agent = (
    {
        "input": lambda x: x["input"],
        "agent_scratchpad": lambda x: format_to_openai_tool_messages(
            x["intermediate_steps"]
        ),
    }
    | prompt
    | llm_with_tools
    | OpenAIToolsAgentOutputParser()
)

agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

print(agent_executor.invoke({"input":"give me a recipie that I can make thats high in protein, I have, chicken, vegetables, rice, and noodles, what can I eat? Can you also include the prep time as well as the total cooking time?"}))