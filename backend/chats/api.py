import json
from auth.auth import get_address
from fastapi import APIRouter, Depends
from ai_functions.llmware_utils import get_llmware_response
from global_vars import Var
from schemas import ChatData

chats_router = APIRouter(prefix="/chat", tags=["chats"])


async def get_context(address, prfid):
    data = await Var.db.get_documents(address, prfid)
    data = [d.get('inferences') for d in data]
    return data


@chats_router.post("/chat")
async def chat(chat_data: ChatData, address=Depends(get_address)):
    history = chat_data.history
    history.append({"query": chat_data.prompt})
    context = (f'you are a helpful medical chat bot for the query provided reply short and precisely'
               f'{await get_context(address, chat_data.prfid)}')
    response = get_llmware_response(str(history), context=context)
    return {'res': response.split('<|eot_id|>')[0]}


@chats_router.post('/score')
async def scorer(prfid: str, address=Depends(get_address)):
    context = (
        f'you are a medical rating bot for rating out of 10 based on a persons health and  give response as json {{"overallhealthscore": "$score"}}'
        f'{await get_context(address, prfid)}')
    response = get_llmware_response(
        'GIVE A CUMULATIVE score based on health and documents IN FORMAT  give response as json {"overallhealthscore": "$score"} nothing else otherthan the json should be sent',
        context=context)
    response = response.split('<|eot_id|>')[0]
    print(response)
    response = json.loads(response)
    return response
