package flowable.quickstarter.api;

import flowable.quickstarter.api.model.UserInfo;
import org.flowable.engine.IdentityService;
import org.flowable.engine.ProcessEngine;
import org.flowable.idm.api.Group;
import org.flowable.task.api.TaskQuery;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserIsCandidate {

    private static final String FLOWABLE_ADMINISTRATOR = "flowableAdministrator";

    private final ProcessEngine processEngine;

    private final IdentityService identityService;

    public UserIsCandidate(ProcessEngine processEngine,
                           IdentityService identityService) {
        this.processEngine = processEngine;
        this.identityService = identityService;
    }


    @PostMapping("/task/{taskId}")
    public boolean belongsToCandidateGroup(@PathVariable String taskId, @RequestBody UserInfo userInfo) {
        List<Group> groups = identityService.createGroupQuery()
                .groupMember(userInfo.getId())
                .list();

        if (!groups.isEmpty() && groups.stream().anyMatch(group -> group.getId().equals(FLOWABLE_ADMINISTRATOR))) {
            return true;
        }

        TaskQuery query = processEngine.getTaskService().createTaskQuery()
                .taskId(taskId)
                .ignoreAssigneeValue()
                .taskCandidateUser(userInfo.getId());

        if (!groups.isEmpty()) {
            query.taskCandidateGroupIn(groups.stream().map(Group::getId).toList());
        }

        return query.count() > 0;
    }
}
