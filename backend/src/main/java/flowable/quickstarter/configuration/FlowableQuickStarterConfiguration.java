package flowable.quickstarter.configuration;

import org.flowable.cmmn.api.CmmnRepositoryService;
import org.flowable.dmn.api.DmnRepositoryService;
import org.flowable.engine.RepositoryService;
import org.flowable.form.api.FormRepositoryService;
import org.flowable.idm.api.IdmIdentityService;
import org.flowable.idm.api.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


@Component
public class FlowableQuickStarterConfiguration implements CommandLineRunner {

    private final IdmIdentityService idmIdentityService;

    public FlowableQuickStarterConfiguration(IdmIdentityService idmIdentityService) {
        this.idmIdentityService = idmIdentityService;
    }

    @Override
    public void run(String... args) {
        if (idmIdentityService.createUserQuery().userId("admin").count() == 0) {
            User user = idmIdentityService.newUser("admin");
            user.setFirstName("admin");
            user.setLastName("quick starter");
            user.setDisplayName("admin quick starter");
            user.setEmail("admin@quickstarter.com");
            user.setPassword("test");
            idmIdentityService.saveUser(user);
        }
    }

    @Bean
    public CommandLineRunner init(final RepositoryService processRepositoryService,
                                  final CmmnRepositoryService caseRepositoryService,
                                  final DmnRepositoryService dmnRepositoryService,
                                  final FormRepositoryService formRepositoryService) {

        return strings -> {
            System.out.println("Number of process definitions : " + processRepositoryService.createProcessDefinitionQuery().count());
            System.out.println("Number of case definitions : " + caseRepositoryService.createCaseDefinitionQuery().count());
            System.out.println("Number of dmn definitions : " + dmnRepositoryService.createDecisionQuery().count());
            System.out.println("Number of form definitions : " + formRepositoryService.createFormDefinitionQuery().count());
        };
    }
}
