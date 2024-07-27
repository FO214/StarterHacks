from langchain_community.tools.tavily_search import TavilySearchResults
import os

os.environ["TAVILY_API_KEY"] = "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"

# make tools
search = TavilySearchResults(max_results=2)


tools = [search]