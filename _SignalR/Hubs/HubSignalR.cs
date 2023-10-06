using Microsoft.AspNetCore.SignalR;

namespace _SignalR.Hubs
{
    public class HubSignalR:Hub
    {
        public async Task Send(string FromUser,string Message)
        {
            await Clients.All.SendAsync("Recieve", FromUser, Message);
        }

    }
}
